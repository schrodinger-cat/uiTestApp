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
    let options = {
      config: null,
      mtWidget: true,
      type: elem.className
    };

    options.config = JSON.parse(elem.dataset.config);
    options.mtWidget = elem.dataset.mtWidget;

    widgets.push(options);
  });

  return widgets;
}
