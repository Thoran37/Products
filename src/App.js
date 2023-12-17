import './App.css'
import RootLayout from './RootLayout';
import Dashboard from './Dashboard';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
function App() {
    
    let rout = createBrowserRouter([
      {
        path:'',
        element:<RootLayout />
      },
      {
        path:'dashboard/:title',
        element: <Dashboard />
      }
    ])

    return (
      <div>
        <RouterProvider router={rout} />
      </div>
    );
  }
export default App