import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {Layout} from '../layout';
//
export const TaskIndex: FC<{ items: any[] }> = (props: { items: any[] }) => {
  const timeStamp = Date.now();
  // 
  return (
    <Layout title="Test_index">
      <div>
        <h1 class="text-4xl font-bold">Tasks</h1>
        <hr class="my-2" />
        <label>Title:</label>
        <input type="text" id="title" 
        class="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"/>
        <div class="mb-2">
          <label  class="text-2xl block text-gray-700 font-bold mb-2">Content</label>
          <textarea id="content" name="content"
          class="border border-gray-400 rounded-md px-3 py-2 w-full h-16 resize-none focus:outline-none focus:border-blue-500"
            placeholder="" required
          ></textarea>
        </div>    
        <hr class="mt-2 mb-1" />
        <button id="save" class="btn-purple ms-2 my-2">Save</button>
        <hr class="my-1" />
        <div id="root"></div>
      </div>
      {/* JS */}
      {html`<script src="/js/tasks/index.js?${timeStamp}"></script>`}
  </Layout>
  )
}

