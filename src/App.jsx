import Navbar from "./components/Navbar"
import Homepage from "./components/Homepage"
import Footer from "./components/Footer"
import Aboutus from './components/Aboutus'
import './components/Aboutus.css'
import './components/Responsive.css'
import './components/Menu_responsive.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Starters from "./components/Starters"
import Maincourse from "./components/Maincourse"
import Sidedishes from "./components/Sidedishes"
import Desserts from "./components/Desserts"
import Beverages from "./components/Beverages"
import Flavorprof from "./components/Flavorprof"
import Contact from "./components/Contact"

function App(){
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/>
        <Homepage/>
        <Footer/></>
    },
    {
      path: "/Aboutus",
      element: <><Navbar/><Aboutus/><Footer/></>
    },
    {
      path:"/Starters",
      element:<><Navbar/><Starters/><Footer/></>
    },
    {
      path:"/Maincourse",
      element:<><Navbar/><Maincourse/><Footer/></>
    },
    {
      path:"/Sidedishes",
      element:<><Navbar/><Sidedishes/><Footer/></>
    },
    {
      path:"/Desserts",
      element:<><Navbar/><Desserts/><Footer/></>
    },
    {
      path:"/Beverages",
      element:<><Navbar/><Beverages/><Footer/></>
    },
    {
      path:"/Flavorprof",
      element:<><Navbar/><Flavorprof/><Footer/></>
    },
    {
      path:"/Contact",
      element:<><Navbar/><Contact/><Footer/></>
    }
  ]);



  return(
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App