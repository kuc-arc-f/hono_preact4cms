import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {Layout} from '../layout';

let itemId = 100;
let nextPage = 1;
let beforePage = 1;
//
export const Ssr1: FC<{ items: any[], page: string }> = (props: { items: any[], page: string}) => {
  console.log(props);
  if(props.page){
    nextPage = Number(props.page) + 1;
    beforePage = Number(props.page) - 1;
    if(beforePage <= 1) { beforePage = 1;}
  }
  //
  const timeStamp = Date.now();
  return (
    <Layout>
      <div >
        <h1 class="text-4xl font-bold">SSR1-index</h1>
        <hr class="my-2" />
        <ul>
          {props.items.map((item) => {
            return (
            <li key={item.id}>
              <a href={`/tasks/${item.id}`}><h3 class="text-3xl font-bold"
              >{item.title}</h3></a>
              <p>id={item.id}, {item.createdAt}</p>
              <hr />
            </li>
            );
          })}
        </ul>
        {/* paginate */}
        <div class="paginate_wrap py-2">
          <a href={`/ssr1?page=${beforePage}`}><button class="btn-outline-purple"> ＜ </button>
          </a>
          <a href={`/ssr1?page=${nextPage}`}><button class="btn-outline-purple"> ＞ </button>
          </a>

        </div>
        <hr class="my-8" />
      </div>
    </Layout>
  )
}

/*
> ＞ <
>Before<
*/