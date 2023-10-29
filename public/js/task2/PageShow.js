//let taskItem = [];
let message = "";
//console.log("id=", TaskItemId);
//
const PageShow = {
    /**
     *
     * @param
     *
     * @return
     */
    delete : async function(id)
    {
        try{
            let ret = false;
            const item = {
                api_key: "",
                id: Number(id),
            }
console.log(item);
//return;
//console.log("title=", titleValue);
            const body = JSON.stringify(item);		
            const res = await fetch("/api/test/delete", {
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
            console.error("Error, delete");
            console.error(e);
            throw new Error('Error , delete');
        }
    },
}
