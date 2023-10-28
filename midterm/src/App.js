import {createBrowserRouter,createRoutesFromElements,Route,Outlet,RouterProvider } from 'react-router-dom'
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Posts from "./pages/posts/Posts";
import Footer from "./pages/footer/footer";
import Navbar from "./pages/navbar/navbar";

function App() {
  const router = createBrowserRouter(
      createRoutesFromElements(
          <Route path='/' element={<Root />}>
            <Route index element={<Home />} path='/'/>
            <Route element={<Posts />} path='/posts'/>
            <Route element={<Profile />} path='/profile'/>
          </Route>
      ), )
  return (
      <main>
        <RouterProvider router={router}/>
      </main>
  )
}


export default App;

const Root = () => {
  return (
      <>
        <Navbar/>
        <div>
          {/* page placeholder */}
          <Outlet />
        </div>
        <Footer/>
      </>
  )
}
