import {createBrowserRouter,createRoutesFromElements,Route,Outlet,RouterProvider } from 'react-router-dom'
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Post from "./pages/post/Post";
import Footer from "./pages/footer/footer";
import Navbar from "./pages/navbar/navbar";

function App() {
  const router = createBrowserRouter(
      createRoutesFromElements(
          <Route path='/' element={<Root />}>
            <Route index element={<Home />} path='/'/>
            <Route element={<Post />} path='/posts/:postId'/>
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
