
const ModalShow = {
    /**
     *
     * @param
     *
     * @return
     */
    diplayOneRow: async function(target) {
        try {
            const elem = document.getElementById("modal_show_box");
            let item = target;
console.log( item);
            //
            let ht = html`
            <div class="modal micromodal-slide" id=${Config.ID_MODAL_SHOW} aria-hidden="true">
                <div class="modal__overlay" tabIndex={-1} data-micromodal-close>
                    <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
                    <header class="modal__header">
                        <h1 class="text-4xl font-bold">${item.title}
                        </h1>
                        <button class="modal__close" aria-label="Close modal" data-micromodal-close>
                        </button>
                    </header>
                    <main class="modal__content">
                        <hr class="my-1" />
                        <div>ID: ${item.id}, <span>${item.createdAt}</span>
                        </div>
                        <hr class="my-1" />
                        Content:<br />
                        <pre class="pre_text">${item.content}</pre>
                    </main>
                    <footer class="modal__footer">
                        <button class="btn-gray" id="${Config.ID_MODAL_SHOW}_close"
                        >Close</button>
                    </footer>
                    </div>
                </div>
            </div>
            `;
            preact.render(ht, elem);
            MicroModal.show(Config.ID_MODAL_SHOW);
            //close
            const closeButton = document.getElementById(`${Config.ID_MODAL_SHOW}_close`);
            if(closeButton) {
                closeButton.addEventListener('click', async () => {
                    console.log("closeButton=");
                    MicroModal.close(Config.ID_MODAL_SHOW);
                });                
            }
        } catch (e) {
            console.error(e);
        }
    },    
}
/*
class="modal__title"
*/