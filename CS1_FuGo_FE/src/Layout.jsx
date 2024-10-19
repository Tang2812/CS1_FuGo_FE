import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='app-container'>
            <div className='header-container'>
                <Header />
            </div>
            <div className='main-container'>
                <div className='sidenav-container'>

                </div>
                <div className='app-content'>
                    <Outlet />
                </div>
            </div>
            <div className='footer-container'>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;