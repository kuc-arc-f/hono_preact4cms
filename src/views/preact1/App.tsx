import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {Layout} from '../layout';
//
export const Test4: FC<{ items: any[] }> = (props: { items: any[] }) => {
  const timeStamp = Date.now();

  // 
  return (
    <Layout title="Test_index">
      <div>
        <h1 class="text-4xl font-bold">Welcome , Preact </h1>
        <hr class="my-2" />
        <div id="root"></div>
        <hr class="my-2" />
        <div id="root2"></div>
        <div id="root3"></div>
      </div>
      {/* JS */}
      {html`<script>
      const test1 = function(num) {
        console.log(num);
      }
      </script>`}
      {html`<script src="/js/preact1/index.js?${timeStamp}"></script>`}
  </Layout>
  )
}

/*
{html`<script> </script>`}
*/