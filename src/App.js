import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Browse from './components/Browse';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element : <Body/>
  },
  {
    path: "/browse",
    element : <Browse/>
  }
]);

function App() {
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;
