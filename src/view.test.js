const { renderToString } = require('./view');

test('renderToString', () => {
  const current = 255;
  const html = renderToString({ current })
  // expect(html).toMatch('<button>1</button>');
  expect(html).toMatch(/<button(.*)>1<\/button>/);
  expect(html).toMatch(`<div>${current}</div>`);
});
