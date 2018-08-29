export function parseHtml(html) {
  const parser = new DOMParser();
  const dom = parser.parseFromString(html, 'text/html');

  let widgets = [];
  let containers = dom.querySelectorAll('[data-mt-widget]');

  containers.forEach(elem => {
    let options = {
      config: null,
      mtWidget: true,
    };

    options.config = JSON.parse(elem.dataset.config);
    options.mtWidget = elem.dataset.mtWidget;

    widgets.push(options);
  });

  return widgets;
}
