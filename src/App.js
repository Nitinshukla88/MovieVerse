import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Browse from './components/Browse';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

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
    <Provider store={appStore}>
    <RouterProvider router={appRouter}/></Provider>
  );
}

export default App;
