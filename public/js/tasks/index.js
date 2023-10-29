console.log("#tasks.index.js");
const html = htm.bind(preact.h);
const elem = document.getElementById("root");
let items = [];
//
const PageIndex = {
    /**
     *
     * @param
     *
     * @return
     */ 
    get_list : async function()
    {
        try{
            let ret = [];
            const item = {
                api_key: "",
            }
            const body = JSON.stringify(item);		
            const res = await fetch("/api/tasks/get_list", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},      
                body: body
            });
            const json = await res.json()
            //console.log(json);   
            if (res.status !== 200) {
                console.error("error, status <> 200");
                throw new Error(await res.text());
            }
            if (json.ret !==  "OK") {
                console.error("Error, json.ret <> OK");
                throw new Error("Error, json.ret <> OK");
            }
            ret = json.data;
            return ret;
        } catch (e) {
            console.error("Error, get_list");
            console.error(e);
            throw new Error('Error , get_list');
        }
    },
    /**
     *
     * @param
     *
     * @return
     */     
    displayProc: function(){
        try {
//console.log("#init=", new Date().toString());
            const li = [];
            items.forEach((item) => {
                let ht = html`
                <div>
                    <a href="/tasks/${item.id}">
                        <h3 class="text-3xl font-bold">${item.title}</h3>
                    </a>
                    <p>ID: ${item.id}, ${item.createdAt}</p>
                    <a href="/tasks/${item.id}">
                        <button  class="btn-outline-purple ms-2 my-2">Show</button>
                    </a>
                    <a href="/tasks_edit/${item.id}">
                        <button  class="btn-outline-purple ms-2 my-2">Edit</button>
                    </a>
                    <hr class="my-2" />
                </div>
                `;
                li.push(ht);
            });
            preact.render(li, elem);
            //event
            /*
            <button id="row_id_${item.id}" style="display: none;">[ Test ]</button>
            */
            /*
            items.forEach((item) => {
                const button= document.querySelector(`#row_id_${item.id}`);
                button.addEventListener('click', () => {
                    const resultRow = items.filter(target => (target.id === item.id));
                    if(resultRow[0]) {
                      alert(`
                      title=${resultRow[0].title} ,
                      id=${resultRow[0].id} ,
                      `);
                    }
                }); 
            });
            */
        } catch (e) {
            console.error("Error, displayProc");
            console.error(e);
        }
    },
    /**
     *
     * @param
     *
     * @return
     */  
    addItem : async function()
    {
        try{
            let ret = false;
            let titleValue = "";
            const title = document.querySelector("#title");
            if(title) {
                titleValue = title.value;
            }
            let contentValue = "";
            const content = document.querySelector("#content");
            if(content) {
                contentValue = content.value;
            }            
            const item = {
                title: titleValue,
                content: contentValue,
            }
//console.log(item);
console.log("title=", titleValue);
            const body = JSON.stringify(item);		
            const res = await fetch("/api/tasks/create", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},      
                body: body
            });
            const json = await res.json()
console.log(json);   
            if (res.status !== 200) {
                console.error("error, status <> 200");
                throw new Error(await res.text());
            }
            if (json.ret !==  "OK") {
                console.error("Error, json.ret <> OK");
                return ret;
            }
            ret = true;
            return ret;
        } catch (e) {
            console.error("Error, addItem");
            console.error(e);
            throw new Error('Error , addItem');
        }
    },     
    /**
     *
     * @param
     *
     * @return
     */     
    initProc: async function() {
        try {
console.log("#init=", new Date().toString());
            items = await this.get_list();
console.log(items);
//            this.displayProc(items);
            this.displayProc();
            //
            const button = document.querySelector('#save');
            button.addEventListener('click', async () => {
                const result = await this.addItem();
console.log("result=", result);
                if(result === true) {
                    location.reload();
                }
            });            
        } catch (e) {
            console.error("Error, get_list");
            console.error(e);
        }
    },
}
PageIndex.initProc();
