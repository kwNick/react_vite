import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Head from './components/Head.jsx'
import Foot from './components/Foot.jsx'
import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'

const Layout = () =>{
  return (
    <div>
      <Head />
      <Outlet />
      <Foot/>
    </div>
  );
};

const router = createBrowserRouter([{
  path: '/',
  element: <Layout/>,
  children: [
    {
      path: '/',
      element: <App/>,
    },
    {
      path: '/about',
      element: <About/>,
    },
    {
      path: '/contact',
      element: <Contact/>,
    },
    {
      path: '/projects',
      element: <Projects/>,
    },
  ]


}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
