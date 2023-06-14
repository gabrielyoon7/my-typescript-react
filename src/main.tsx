import React from 'react'
import ReactDOM from 'react-dom/client'
import router from "./router.tsx";
import {RouterProvider} from "react-router-dom";
import {worker} from "./mocks/browser.ts";

async function main() {

  await worker.start({
    serviceWorker: {
      url: '/my-typescript-react/mockServiceWorker.js',
    },
  })

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>,
  )
}

main();
