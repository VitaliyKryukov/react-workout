import Header from '../../components/Header';
import GalleryImage from '../../images/header_bg_3.jpg';


import './gallery.css';

const Gallery = () => {
  const galleryLenght = 8;
  const images = [];

  for (let i = 1; i <= galleryLenght; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }


  return (
    <>
      <Header tittle="Our Gallery" image={GalleryImage} >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, ut at? Sequi, rerum quibusdam!
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>;
            })
          }
        </div>
      </section>
    </>
  );
};

export default Gallery;