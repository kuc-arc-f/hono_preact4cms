import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {Layout} from '../layout';

let itemId = 100;
//
export const Csr1: FC<{ items: any[] }> = (props: { items: any[] }) => {
  const timeStamp = Date.now();
  return (
    <Layout>
      <div>
        <h1 class="text-4xl font-bold">Csr1 </h1>
        <hr class="my-2" />
        <div id="root"></div>
        <hr class="my-2" />
        {html`<script src="https://cdn.jsdelivr.net/npm/preact@10.5.13/dist/preact.umd.js"></script>`}
        {html`<script src="https://cdnjs.cloudflare.com/ajax/libs/htm/3.0.4/htm.min.js"></script>`}
        {html`<script>
        const itemId = ${itemId};
        </script>`}
        {html`<script src="/js/csr/csr2.js?${timeStamp}"></script>`}       
      </div>
    </Layout>
  )
}

/*
{html`<script type="text/babel" src="/js/csr/csr8.js?${timeStamp}"></script>`}       
*/