// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import PortfolioNav from './components/PortfolioNav.js';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 
import Topics from './pages/Topics.js';
import Home from './pages/HomePage.js';
import PaintingsPage from './pages/PaintingsPage.js';
import GalleryPage from './pages/GalleryPage.js';

// do I need this ***
import PaintingList from './components/PaintingList.js';
import AddPaintingPageForm from './pages/AddPaintingPageForm.js';
import EditPaintingPageForm from './pages/EditPaintingPageForm.js';


// Define the function that renders the content in Routes, using State.
function App() {

  const [painting, setPaintingToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Rachel <i><img src="zondicons--keyboard.png" className='favicon-img' alt="Light blue keyboard"/></i> Hoeferlin</h1>
          </header>
          <PortfolioNav />
          <main>
            <section>
                <Routes> 
                    <Route path="/" element={<Home />} />
                    <Route path="/Topics" element={<Topics />} />
                    <Route path="/PaintingsPage" element={<PaintingsPage setPainting={setPaintingToEdit}/>} />
                    <Route path="/AddPaintingPageForm" element={<AddPaintingPageForm />} />   
                    <Route path="/EditPaintingPageForm" element={<EditPaintingPageForm paintingToEdit={painting} />} />
                    <Route path="/GalleryPage" element={<GalleryPage />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2024 Rachel Hoeferlin</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;
