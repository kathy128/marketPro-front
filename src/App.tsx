import {Routes, Route, BrowserRouter} from "react-router-dom";
import './App.css'
import Home from './pages/home/home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import RegisterPage from './pages/auth/registerPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const notify = () => toast("This is a toast notification !");
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route
                        path="/register"
                        element={<RegisterPage type="register" />}
                    />
                </Routes>
                <Footer/>
            </BrowserRouter>
            <ToastContainer></ToastContainer>
        </>
    )
}

export default App;
