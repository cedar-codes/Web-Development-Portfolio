import React from 'react';
import { Link } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function NavMenu() {
  return (
    <nav>
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/">Home</Link>
        <Link to="/Topics">Topics</Link>
        <Link to="/PaintingsPage">Painting Log</Link>
        <Link to="/GalleryPage">Gallery</Link>
        
    </nav>
  );
}

export default NavMenu;

/*   <Link to="../Gallery.js">Gallery</Link>
        <Link to="../Order.js">Order</Link>
        <Link to="../Contact.js">Contact</Link> */