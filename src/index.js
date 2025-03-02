import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import DaySattaResult from './js/daySattaResult';
import FooterButton from './js/footerButton';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { useLocation } from 'react-router-dom';
import Warning from './js/warning';
import DetailAccordian from './js/detailAcord';
import App from './App';
const RootComponent = () => {
  const location = useLocation()
  const isDisc = location.pathname.includes('/disclaimer');
  const isContact = location.pathname.includes('/contact');
  const isPrivacy = location.pathname.includes('/privacypolicy');
  const isAbout = location.pathname.includes('/about');
  return (
    <div className='main-div'>
      <div className='container-fluid'>
        <App />
        {/* <DaySattaResult /> */}
        {(!isDisc && !isContact && !isPrivacy && !isAbout) && (
          <Warning />
        )}
        <DetailAccordian />
        <FooterButton />
      </div>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <RootComponent />
  </Router>,
  document.getElementById('root')
);
