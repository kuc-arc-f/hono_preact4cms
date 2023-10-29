console.log("#preact.index.js");

const html = htm.bind(preact.h);
const elem = document.getElementById("root");
//
const li = [];
const data = ['hoge1', 'hoge2', 'hoge3'];
for (var i in data) {
    li.push(html`<h1>Hello[ ${data[i]}]  - 000</h1>`);
};
preact.render(li, elem);
//
//root2
//
const li2 = [];
li2.push(html`<h1 class="text-3xl">li_2</h1>`);
li2.push(html`<hr class="my-2" />`);
for (var i in data) {
    li2.push(html`<h1>li2-Hello[ ${data[i]}]  - 111</h1>`);
};
li2.push(html`<hr class="my-2" />`);
preact.render(li2, document.getElementById("root2"));
//
//root3
//
const li3 = [];
li3.push(html`<h1 class="text-3xl">li_3</h1>`);
li3.push(html`<hr class="my-2" />`);
for (var i in data) {
    let htm = html`
    <div>
        <h1>li2-Hello[ ${data[i]}]  - 111</h1>
        <button id="btn_id_${i}">[ Test ]</button>
    </div>
    `;
    li3.push(htm);
};
li3.push(html`<hr class="my-2" />`);
preact.render(li3, document.getElementById("root3"));
//event
for (let i in data) {
    const button= document.querySelector(`#btn_id_${i}`);
    button.addEventListener('click', () => { alert(data[i])}); 
}

