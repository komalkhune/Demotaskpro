
import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import Login from './Pages/Login/Login';
import Admindashboard from './Pages/Admin/Admindashboard';
import Mainpage from './Pages/Admin/Mainpage';
import Homepage from './Pages/Homepage/Homepage';
import Signup from './Pages/Login/Signup';
import Adduser from './Pages/Admin/Adduser';
import Storesdashb from './Pages/Stores/Storesdashb';
import Storesmainpage from './Pages/Stores/Storesmainpage';
import Userdashboard from './Pages/User/Userdashb';
import Usermainpage from './Pages/User/Usermainpage';
import Users from './Pages/Admin/Users';
import Changepass from './Pages/Admin/Changepass';


const myRouter=createBrowserRouter([

  {
    path:"/",
    element:<Homepage/>
  },
   {
    path:"/login",
    element:<Login/>
  },
    {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/admindashboard",
    element:<Admindashboard/>,
    children:[
       {
        index: true,   //  default page
        element: <Mainpage />
      },
     {
      path:"mainpage",
      element:<Mainpage/>
     },
      {
      path:"adduser",
      element:<Adduser/>
     },
     {
      path:"mainpage",
      element:<Mainpage/>
     },
     {
      path:"users",
      element:<Users/>
     },
     {
      path:"changepass",
      element:<Changepass/>
     },
    ]},


     {
    path:"/userdashboard",
    element:<Userdashboard/>,
    children:[
       {
        index: true,   //  default page
        element: <Usermainpage />
      },
     {
      path:"usermainpage",
      element:<Usermainpage/>
     },
    ]},

     {
    path:"/storesdashb",
    element:<Storesdashb/>,
    children:[
       {
        index: true,   //  default page
        element: <Storesmainpage />
      },
     {
      path:"storesmainpage",
      element:<Storesmainpage/>
     },
    ]}



])

function App() {
  return (
    <div className="App">
     <RouterProvider router={myRouter}/>
    </div>
  );
}

export default App;
