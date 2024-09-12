import React from 'react';
import { RiThumbDownLine } from 'react-icons/ri';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'images/ocean-moon-painting.jpg',
    originalAlt: 'Painting of an ocean under a crescent moon.',
    thumbnail: 'images/ocean-moon-painting.jpg',
    description: 'Lunar eclipse over the Pacific, acrylic painting by Rachel Hoeferlin, 2023.',
    originalHeight: '450px',
  },
  {
    original: 'images/mountain-river-painting.jpg',
    originalAlt: 'Painting of a river flowing to a mountain park in the distance.',
    thumbnail: 'images/mountain-river-painting.jpg',
    description: 'A river flows to an indigo landscape dominated by a mountain peak, acrylic painting by Rachel Hoeferlin, 2022.',
    originalHeight: '450px',
  },
  {
    original: 'images/winter-mountain-painting.jpg',
    originalAlt: 'Painting of a mountain in the distance under a full moon.',
    thumbnail: 'images/winter-mountain-painting.jpg',
    description: 'Moody winter landscape of a mountain under a full moon, acrylic painting by Rachel Hoeferlin, 2023.',
    originalHeight: '450px',
  },
  {
    original: 'images/abstract-drip-painting.jpg',
    originalAlt: 'Abstract acrylic painting of blues, purples and black drips.',
    thumbnail: 'images/abstract-drip-painting.jpg',
    description: 'Abstract acrylic painting, by Rachel Hoeferlin, 2019.',
    originalHeight: '400px',
  },
  {
    original: 'images/bubble-insertion-sort.png',
    originalAlt: 'Graph showing time complexity results of bubble sort vs insertion sort.',
    thumbnail: 'images/bubble-insertion-sort.png',
    description: 'Matplot lib graph demonstrating time complexity of bubble vs insertion sort, from CS162, by Rachel Hoeferlin, 2024.',
    originalHeight: '400px',
  },
  {
    original: 'images/moab-natural-bridge.jpg',
    originalAlt: 'Mountains in the far distance, framed by a natural bridge in the Utah, USA, desert.',
    thumbnail: 'images/moab-natural-bridge.jpg',
    description: 'Natural bridge in the Moab Desert, 2016.',
    originalHeight: '400px',
  },
  {
    original: 'images/chaco-canyon.jpg',
    originalAlt: 'Desert landscape in New Mexico, USA, with ancient structures.',
    thumbnail: 'images/chaco-canyon.jpg',
    description: 'Chaco Canyon, a historical site of Indigenous significance, 2016.',
    originalHeight: '400px',
  },
  {
    original: 'images/grapevine.jpeg',
    originalAlt: 'Grapevine in the foreground, with abundant grapes growing.',
    thumbnail: 'images/grapevine.jpeg',
    description: "The grapevine growing in my grandparent's backyard for over 50 years, 2023.",
    originalHeight: '400px',
  },
  {
    original: 'images/franklinton-conservatory-art.jpeg',
    originalAlt: 'Multi-colored glass art sculpture in Franklin Park Conservatory, OH, USA.',
    thumbnail: 'images/franklinton-conservatory-art.jpeg',
    description: 'Colorful glass art installation at Franklin Park Conservatory, OH, USA, 2023.',
    originalHeight: '400px',
  },
  {
    original: 'images/disco-ball.jpeg',
    originalAlt: 'Disco ball displays a range of colors reflected on the wall.',
    thumbnail: 'images/disco-ball.jpeg',
    description: 'Midwest disco therapy at an underground music venue in Ohio, 2019.',
    originalHeight: '400px',
  },
];

function GalleryPage() {
  return (
    <> 
      <h2>Gallery</h2>
      <p>Gallery page using React's carousel image framework.</p>
      <article>
        <ImageGallery items={images} />
      </article>
    </>
  );
}

export default GalleryPage;