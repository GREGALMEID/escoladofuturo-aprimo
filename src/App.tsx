import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Main from './components/Main';
import Footer from './components/Footer';
import Inscription from './pages/Inscription';
import ProgramDetails from './pages/ProgramDetails';
import Checkout from './pages/Checkout';
import PixPayment from './pages/PixPayment';
import PixPaymentUpsell from './pages/PixPaymentUpsell';
import SuccessPage from './pages/SuccessPage';
import Upsell1 from './pages/Upsell1';
import Upsell2 from './pages/Upsell2';
import Upsell3 from './pages/Upsell3';
import Upsell4 from './pages/Upsell4';
import CheckoutUpsell from './pages/CheckoutUpsell';
import { LocationProvider } from './context/LocationContext';
import { UserProvider } from './context/UserContext';

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <UserProvider>
      <LocationProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-white flex flex-col">
            <Header />
            <Routes>
              <Route path="/" element={
                <>
                  <Banner />
                  <Main />
                </>
              } />
              <Route path="/inscricao" element={<Inscription />} />
              <Route path="/programa" element={<ProgramDetails />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/checkout-upsell" element={<CheckoutUpsell />} />
              <Route path="/pix-payment" element={<PixPayment />} />
              <Route path="/pix-payment-upsell" element={<PixPaymentUpsell />} />
              <Route path="/sucesso" element={<SuccessPage />} />
              <Route path="/upsell1" element={<Upsell1 />} />
              <Route path="/upsell2" element={<Upsell2 />} />
              <Route path="/upsell3" element={<Upsell3 />} />
              <Route path="/upsell4" element={<Upsell4 />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </LocationProvider>
    </UserProvider>
  );
}

export default App;