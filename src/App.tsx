import {Routes, Route, BrowserRouter} from "react-router-dom";
import './App.css'
import Home from './pages/home/home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import RegisterPage from './pages/auth/registerPage';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/auth/login';
import ProductPage from './pages/products/productsPage';
import {Provider} from 'react-redux';
import {store} from './store/configStore';
import CartModal from './components/modal/cartModal';

function App() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar/>
                    <CartModal />
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route
                            path="/register"
                            element={<RegisterPage/>}
                        />
                        <Route path="/products" element={<ProductPage/>}/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
                <ToastContainer></ToastContainer>
            </Provider>
        </>
    )
}

export default App;
