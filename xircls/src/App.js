import './App.css';
import Home from './components/Home';
import Blog from './components/Blog';
import Company from './components/Company';
import Products from './components/Products';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='container-lg border p-0'>
      <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/company' element={<Company/>}/>
        <Route path='/blog' element={<Blog/>}/>
     </Routes>
    </div>
    </div>
  );
}

export default App;
