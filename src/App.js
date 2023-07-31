import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MainLayout } from './layout';
import { ProductPage } from './product/product-page';
import { EditProduct } from './product/visibility/edit-product'
import { Sabad} from './pages/sabad/sabad';
import { NewUserPage} from './pages/comment';

function App() {
  return (
  <BrowserRouter>
  <MainLayout>
<Routes>
<Route path="/" element={<ProductPage/>}/>
<Route path="/edit/:id" element={<EditProduct/>}/>
<Route path='sabad' element={<Sabad/>}/>
<Route  path='new' element={<NewUserPage/>}/>
</Routes>
   </MainLayout>
</BrowserRouter>
   
  );
}

export default App;
