
const html = htm.bind(preact.h);
//
const PageIndex = {
    /**
     * 
     * @param
     *
     * @return
     */     
    setRowItem: function (num) {
console.log(num);
        const elem = document.getElementById("rowItem1");
        const App = function(props){
            return html`<h1>Hello, ${props.name}!-num=${num}</h1>`;
        }
        preact.render(html`<${App} name="World" />`, elem);        
    },
    /**
     * 
     * @param
     *
     * @return
     */     
    setRowItem2: function (id, title) {
//console.log(num);
        const elem = document.getElementById("rowItem2");
        const App = function(props){
            return html`
            <div>
                <h3 class="text-3xl font-bold">rowItem2:</h3>
                <hr />
                <span>id=${id}</span>
                <span>, title=${title}</span>
            </div>
            `;
        }
        preact.render(html`<${App} />`, elem);        
    },
        
}

// PageIndex.setRowItem