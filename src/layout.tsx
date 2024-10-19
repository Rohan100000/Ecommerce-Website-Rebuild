import { Outlet } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navbar';
import Footer from './components/footer';

function Layout() {
  return (
    <>
      {/*Navbar*/}
      <Navbar />

      {/* Home View */}
      <Home />

      {/* Footer */}
      <Footer />
      <Outlet />
    </>
  )
}

export default Layout;
