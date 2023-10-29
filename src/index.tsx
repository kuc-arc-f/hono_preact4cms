import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'
import type { FC } from 'hono/jsx'
import { serveStatic } from 'hono/cloudflare-workers'
//
import type { Database } from '@cloudflare/d1'
import {Layout} from './views/layout';
//api-router
import testRouter from './routes/test';
import taskRouter from './routes/tasks';
import postRouter from './routes/posts';
/* views */
import Top from './views/Top';
import {PostShow} from './views/posts/show/App';

import {Csr1} from './views/csr1/App';
import {Csr2} from './views/csr2/App';
import {Ssr1} from './views/ssr1/App';
//
import {TestIndex} from './views/test_index/App';
import {Test4} from './views/preact1/App';
import {Test5} from './views/preact2/App';
/* tasks */
import {TaskIndex} from './views/tasks/App';
import {TaskShow} from './views/tasks/show/App';
import {TaskEdit} from './views/tasks/edit/App';
/* task2 */
import {Task2Index} from './views/task2/App';
{/* admin */}
import {AdminIndex} from './views/admin/App';
import {AdminPostIndex} from './views/admin/posts/App';
import {AdminPostCreate} from './views/admin/posts/create/App';
import {AdminPostShow} from './views/admin/posts/show/App';
import {AdminPostEdit} from './views/admin/posts/edit/App';
////
interface Env {
  DB: Database
}
//
export const app = new Hono()
//basicAuth
app.use(
  "/admin/*",
  basicAuth({
    username: "test",
    password: "1111",
  })
);
//serveStatic
app.get('/static/*', serveStatic({ root: './' }))
app.get('/js/*', serveStatic({ root: './' }))
app.get('/styles/*', serveStatic({ root: './' }))
/**
* route
*/
app.get('/', async (c) => {
  let page = c.req.query('page');
  if(!page) { page = '1';}
console.log("page=", page);
  const items = await postRouter.get_list_page(c, c.env.DB, page);
  return c.html(<Top items={items} page={page} />)
});
//
app.get('/posts/:id', async (c) => { 
  const {id} = c.req.param();
  const item = await postRouter.get(c, c.env.DB, id);
console.log("id=", id);
  return c.html(<PostShow item={item} id={Number(id)} />)
});
const testItems = [
  {id: 1, title: "title_1"},
  {id: 2, title: "title_2"},
  {id: 3, title: "title_3"},
];
/* test_index */
app.get('/test_index', async (c) => { 
  return c.html(<TestIndex items={testItems} />);
});
app.get('/csr1', async (c) => { 
  return c.html(<Csr1 items={[]} />);
});
app.get('/csr2', async (c) => { 
  return c.html(<Csr2 items={[]} />);
});
app.get('/ssr1', async (c) => { 
  let page = c.req.query('page');
  if(!page) { page = '1';}
console.log("page=", page);
  const items = await testRouter.get_list_page(c, c.env.DB, page);
  return c.html(<Ssr1 items={items} page={page} />);
});
app.get('/preact1', async (c) => { 
  return c.html(<Test4 items={[]} />);
});
app.get('/preact2', async (c) => { 
  return c.html(<Test5 items={[]} />);
});
app.get('/tasks', async (c) => { 
  return c.html(<TaskIndex items={[]} />);
});
app.get('/tasks/:id', async (c) => { 
  const {id} = c.req.param();
console.log("id=", id);
  const item = await testRouter.get(c, c.env.DB, id);
console.log(item);
  return c.html(<TaskShow item={item} id={Number(id)} />);
});
app.get('/tasks_edit/:id', async (c) => { 
  const {id} = c.req.param();
console.log("id=", id);
  const item = await testRouter.get(c, c.env.DB, id);
console.log(item);
  return c.html(<TaskEdit item={item} id={Number(id)} />);
});
//
app.get('/task2', async (c) => { 
  return c.html(<Task2Index items={[]} />);
});
/* admin */
app.get('/admin', async (c) => { 
  return c.html(<AdminIndex items={[]} />);
});
app.get('/admin/posts', async (c) => { 
  let page = c.req.query('page');
  if(!page) { page = '1';}
console.log("page=", page);
  const items = await postRouter.get_list_page(c, c.env.DB, page);
  return c.html(<AdminPostIndex items={items} page={page} />);
});
app.get('/admin/posts/create', async (c) => { 
  return c.html(<AdminPostCreate />);
});
app.get('/admin/posts/:id', async (c) => { 
  const {id} = c.req.param();
console.log("id=", id);
  const item = await postRouter.get(c, c.env.DB, id);
//console.log(item);
  return c.html(<AdminPostShow item={item} id={Number(id)} />);
});
app.get('/admin/posts/edit/:id', async (c) => { 
  const {id} = c.req.param();
console.log("id=", id);
  const item = await postRouter.get(c, c.env.DB, id);
//console.log(item);
  return c.html(<AdminPostEdit item={item} id={Number(id)} />);
});
/**
* API
*/
app.post('/api/test/create', async (c) => { 
  const body = await c.req.json();
  const resulte = await testRouter.create(body, c.env.DB);
  return c.json(resulte);
});
app.post('/api/test/delete', async (c) => { 
  const body = await c.req.json();
  const resulte = await testRouter.delete(body, c.env.DB);
  return c.json(resulte);
});
/* tasks */
app.post('/api/tasks/get_list', async (c) => { 
  const resulte = await taskRouter.get_list(c, c.env.DB);
  return c.json({ret: "OK", data: resulte});
});
app.post('/api/tasks/get', async (c) => { 
  const body = await c.req.json();
  const resulte = await taskRouter.get(body, c, c.env.DB);
  return c.json({ret: "OK", data: resulte});
});
app.post('/api/tasks/create', async (c) => { 
  const body = await c.req.json();
  const resulte = await taskRouter.create(body, c.env.DB);
  return c.json(resulte);
});
app.post('/api/tasks/update', async (c) => { 
  const body = await c.req.json();
  const resulte = await taskRouter.update(body, c.env.DB);
  return c.json(resulte);
});
app.post('/api/tasks/delete', async (c) => { 
  const body = await c.req.json();
  const resulte = await taskRouter.delete(body, c.env.DB);
  return c.json(resulte);
});
/* posts */
app.post('/api/posts/get_list', async (c) => { 
  const resulte = await postRouter.get_list(c, c.env.DB);
  return c.json({ret: "OK", data: resulte});
});
app.post('/api/posts/create', async (c) => { 
  const body = await c.req.json();
  const resulte = await postRouter.create(body, c.env.DB);
  return c.json(resulte);
});
app.post('/api/posts/update', async (c) => { 
  const body = await c.req.json();
  const resulte = await postRouter.update(body, c.env.DB);
  return c.json(resulte);
});
app.post('/api/posts/get', async (c) => { 
  const body = await c.req.json();
  const resulte = await postRouter.get(body, c, c.env.DB);
console.log(resulte);
  return c.json({ret: "OK", data: resulte});
});
app.post('/api/posts/delete', async (c) => { 
  const body = await c.req.json();
  const resulte = await postRouter.delete(body, c.env.DB);
  return c.json(resulte);
});
//
app.post('/api/csr2/get_list', async (c) => { 
  const body = await c.req.json();
  const resulte = await testRouter.get_list(c, c.env.DB);
  return c.json({ret: "OK", data: resulte});
});

export default app;
/*
*/
