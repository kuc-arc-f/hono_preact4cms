
console.log("itemId=", itemId);
//
const html = htm.bind(preact.h);
const App = props => html`<h1>Hello, ${props.name}!</h1>`;
preact.render(html`<${App} name="World" />`, document.body);

