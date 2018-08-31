/**
 * Используя парсер сделаю из нужных элементов (в данном случае у всех, у которых есть data-аттрибут data-mt-widget)
 * массив из объектов с настройками
 * @param {*} html - исходный html
 */
export function parseHtml(html) {
  const parser = new DOMParser();
  const dom = parser.parseFromString(html, 'text/html');

  let widgets = [];
  let containers = dom.querySelectorAll('[data-mt-widget]');

  containers.forEach(elem => {
    widgets.push(createNode(elem));
  });

  let tree = convertHtmlToJson(dom);
  console.log(normalizeTree(tree));

  return widgets;
}

function createNode(elem) {
  let options = {
    config: null,
    mtWidget: true,
    type: elem.className,
    children: [],
  };

  options.config = JSON.parse(elem.dataset.config);
  options.mtWidget = elem.dataset.mtWidget;

  return options;
}

function convertHtmlToJson(html) {
  let dom = html.querySelectorAll('body');
  let tree = [];
  let rootElement = Array.from(dom[0].children);

  rootElement.forEach(element => {
    function findWidgetComponents(node) {
      let options = {
        config: null,
        mtWidget: true,
        type: null,
        children: [],
      };

      if (node.hasAttribute('data-mt-widget')) {
        options.type = node.className;
        options.config = JSON.parse(node.dataset.config);

        if (node.className == 'mt-container' && node.children.length) {
          let c = Array.from(node.children);

          c.forEach(child => {
            options.children.push(findWidgetComponents(child));
          });
        }
      } else {
        options.mtWidget = false;

        if (node.children.length) {
          let c = Array.from(node.children);

          c.forEach(child => {
            options.children.push(findWidgetComponents(child));
          });
        }
      }

      return options;
    }

    tree.push(findWidgetComponents(element));
  });

  return tree;
}

function normalizeTree(node) {
  node.forEach((element, key) => {
    if(!element.mtWidget) {
      if(element.children.length == 0) {
        delete node[key];
      }
    }

    normalizeTree(element.children);
  })

  return node
}
