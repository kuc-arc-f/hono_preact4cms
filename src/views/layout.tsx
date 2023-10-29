import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
let title = "Welcome";
//
export const Layout: FC = (props) => {
//console.log(props);
  if(props.title){title = props.title;}
  return (
    <html>
      <head>
        <title>{title}</title>
        {/* JS */}
        {html`<script src="https://cdn.jsdelivr.net/npm/preact@10.5.13/dist/preact.umd.js"></script>`}
        {html`<script src="https://cdnjs.cloudflare.com/ajax/libs/htm/3.0.4/htm.min.js"></script>`}       
        {html`<script src="https://unpkg.com/micromodal/dist/micromodal.min.js"></script>`}       
        {/* CSS */}
        {html`
        <link href="/styles/main.css" rel="stylesheet">
        <link href="/styles/globals.css" rel="stylesheet">
        <link href="/styles/micromodal.css" rel="stylesheet" />
        `}        
      </head>
      <div class="text-center py-2">
        <a href="/">[ home ]</a>
        <a href="/tasks">[ tasks ]</a>
        <a href="/task2">[ task2 ]</a>
        <a href="/ssr1">[ ssr1 ]</a>
      </div>
      <hr />
      <body>
        <div class="container mx-auto my-2 px-8 bg-white">{props.children}</div>
      </body>
    </html>
  )
}
/*
  <a href="/preact1">[ preact1 ]</a>
  <a href="/preact2">[ preact2 ]</a>
*/