import Header from './Header';
import Nav from '../Nav';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header />
            <main className="App">
                <Outlet />
            </main>            
        </>
    )    
}
export default Layout