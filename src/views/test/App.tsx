import type { FC } from 'hono/jsx'
import {Layout} from '../layout';
//
export const Test: FC<{ items: any[] }> = (props: { items: any[] }) => {
  return (
    <Layout title="Test_index">
      <div>
        <h1 class="text-4xl font-bold">Hello Hono!</h1>
        <a href="/test/test_create">[ Create ]</a>
        <hr />
      </div>
    </Layout>
  )
}