// https://www.w3schools.com/react/react_router.asp
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/index/index'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
