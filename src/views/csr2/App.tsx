import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {Layout} from '../layout';

let itemId = 100;
//
export const Csr2: FC<{ items: any[] }> = (props: { items: any[] }) => {
  const timeStamp = Date.now();
  return (
    <Layout>
      <div>
        <div id="root"></div>
        {html`<script type="module" src="/js/csr/csr1.js?${timeStamp}"></script>`}       
      </div>
    </Layout>
  )
}

/*
*/