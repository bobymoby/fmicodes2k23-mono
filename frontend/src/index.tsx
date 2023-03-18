import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      loader: rootLoader,
      children: [
        {
          path: "team",
          element: <Team />,
          loader: teamLoader,
        },
      ],
    },
  ]);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
