import { useState } from 'react';
import styles from './Slideshow.module.css';
import arrow from '../../assets/arrow-slide.png';


const Slideshow = ({ pictures }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = pictures ? pictures : [];


  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const nextImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  return (
    <div className={styles.slideshow}>
      
        {images.map((images, index) => (
          <img
            key={index}
            className={`${styles.slide} ${index === currentImage ? styles.active : ''}`}
            src={images}
            alt=""
          />
        ))}
        {images.length > 1 &&
          <>
            <img className={`${styles.slideArrow} ${styles.left}`} src={arrow} alt="previous" onClick={prevImage}/>
            <img className={`${styles.slideArrow} ${styles.right}`} src={arrow} alt="next" onClick={nextImage}/>
            <div className={styles.slideNumber}>{currentImage + 1}/{images.length}</div>
          </>
        }
      
    </div>
  );
  
};

export default Slideshow;
