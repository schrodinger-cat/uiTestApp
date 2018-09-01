/**
 * Используя парсер сделаю из нужных элементов (в данном случае у всех, у которых есть data-аттрибут data-mt-widget)
 * массив из объектов с настройками
 * @param {*} html - исходный html
 */
export function parseHtml(html) {
  const parser = new DOMParser();
  const dom = parser.parseFromString(html, 'text/html');

  return convertHtmlToJson(dom);
}

/**
 * Рекурсивно создадим массив со всеми узлами из исходного html
 * @param {*} html -  строка с html
 */
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

/**
 * Соберем объект из значений виджетов, для последующего связывания. Ключ - id виджета
 * @param {*} html - исходный html
 */
export function valuesList(html) {
  const parser = new DOMParser();
  const dom = parser.parseFromString(html, 'text/html');
  const list = {};

  let widgetContainer = dom.querySelectorAll('[data-mt-widget]');

  widgetContainer.forEach(elem => {
    let config = JSON.parse(elem.dataset.config);

    if(elem.className != 'mt-container') {
      list[config.id] = elem.className == 'mt-checkbox' ? config.checked : config.value;
    }
  });

  return list;
}
