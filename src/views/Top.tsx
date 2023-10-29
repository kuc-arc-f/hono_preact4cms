import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {Layout} from './layout';
//
let nextPage = 1;
let beforePage = 1;
//
//const Top: FC<{ messages: string[] }> = (props: { messages: string[] }) => {
const Top: FC<{ items: any[], page: string }> = (props: { items: any[], page: string}) => 
{
console.log("#AdminPostIndex");
console.log(props.items);
  if(props.page){
    nextPage = Number(props.page) + 1;
    beforePage = Number(props.page) - 1;
    if(beforePage <= 1) { beforePage = 1;}
  }  
  return (
  <Layout title="Welcome Top">
    <h1 class="text-4xl font-bold">Hello Blogs</h1>
    <hr class="my-2" />
    <ul>
      {props.items.map((item) => {
        return (
        <li key={item.id}>
          <a href={`/admin/posts/${item.id}`}><h3 class="text-3xl font-bold"
          >{item.title}</h3></a>
          <p>id={item.id}, {item.createdAt}</p>
          <hr />
        </li>
        );
      })}
    </ul>
    {/* paginate */}
    <div class="paginate_wrap py-2">
      <a href={`/?page=${beforePage}`}>
        <button class="btn-outline-purple"> ＜ </button>
      </a>
      <a href={`/?page=${nextPage}`}>
        <button class="btn-outline-purple"> ＞ </button>
      </a>
    </div>
    <hr class="my-8" />    
  </Layout>
  )
}
export default Top;
/*
<ul>
  {props.messages.map((message) => {
    return (<li class="my-2" >{message}!!</li>)
  })}
</ul>
*/
