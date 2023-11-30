import './App.css';
import Footer from './Components/Footer/footer.jsx';
import Header from './Components/Header/header.jsx';
import Home from './Pages/Home/Home.jsx';
import AdoptPage from './Pages/Adoption/AdoptionPage';
import ComplaintsPage from 'Pages/Complaints/ComplaintsPage';
import InformationPage from 'Pages/Information/InformationPage';
import DonationPage from 'Pages/Donations/DonationPage';
import ContactPage from 'Pages/Contact/ContactPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import config from 'Chatbot/config';
import MessageParser from 'Chatbot/MessageParser';
import ActionProvider from 'Chatbot/ActionProvider';


function App() {

  const [chatOpen, setChatOpen] = useState(false);

  return (
    <BrowserRouter>
        <Header></Header>
        <div className='chat-contain' >
        {chatOpen && (
        <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      )}
        <button 
        className='btn-chat'
        onClick={()=> setChatOpen((prev) => !prev)}>
        <FontAwesomeIcon icon={faHeadset} />
        </button>
        </div>
        
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/adopciones/mascotas' element={<AdoptPage/>}></Route>
          <Route path='/denuncias' element={<ComplaintsPage/>}></Route>
          <Route path='/informacion' element={<InformationPage/>}></Route>
          <Route path='/donaciones' element={<DonationPage/>}></Route>
          <Route path='/contacto' element={<ContactPage/>}></Route>
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
