
console.log("csr1=");
//
const elem = document.getElementById("root");
//
const html = htm.bind(preact.h);
//
const App = function(props){
    return html`<h1>Hello, ${props.name}!  - 777</h1>`;
}
preact.render(html`<${App} name="World" />`, elem);
