import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Head from './components/Head.jsx'
import Foot from './components/Foot.jsx'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'

const Layout = () => {
  return (
    <div className='min-h-screen w-full bg-fuchsia-100'>
      <div className='pt-10 flex flex-col items-center gap-y-8'>
        <Head />
        <Outlet />
        <Foot />
      </div>
    </div>
  );
};

const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/projects',
      element: <Projects />,
    },
  ]

}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
