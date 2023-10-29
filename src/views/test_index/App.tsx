import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {Layout} from '../layout';
//
export const TestIndex: FC<{ items: any[] }> = (props: { items: any[] }) => {
  const timeStamp = Date.now();
  //
  return (
    <Layout title="Test_index">
      <div>
        {html`<script src="https://cdn.jsdelivr.net/npm/preact@10.5.13/dist/preact.umd.js"></script>`}
        {html`<script src="https://cdnjs.cloudflare.com/ajax/libs/htm/3.0.4/htm.min.js"></script>`}
        <h1 class="text-4xl font-bold">Hello Hono!</h1>
        <hr class="my-2" />
        <ul>
          {props.items.map((item) => {
            return (
            <li key={item.id}>
              <a href={`/test/${item.id}`}><h3 class="text-3xl font-bold"
              >{item.title}</h3></a>
              <p>id={item.id}</p>
              {html`
              <button class="btn" onClick="PageIndex.setRowItem(${item.id})">Test</button>
              `}
              {html`
              <button class="btn" 
              onClick="PageIndex.setRowItem2(${item.id}, '${item.title}')">Test2</button>
              `}
              <hr />
            </li>
            );
          })}
        </ul>
        {/* rowItem1 */}
        <div id="rowItem1"></div>
        <hr class="my-2" />
        <div id="rowItem2"></div>
        <hr class="my-2" />
      </div>
      {/* JS */}
      {html`<script>
      const test1 = function(num) {
        console.log(num);
      }
      </script>`}
      {html`<script src="/js/test/PageIndex.js?${timeStamp}"></script>`}
  </Layout>
  )
}

/*
{html`<script> </script>`}
{html`<script src="/js/csr/csr2.js?${timeStamp}"></script>`}
*/