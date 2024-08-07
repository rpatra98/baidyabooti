// components/Slideshow.js
'use client'
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const SlideshowContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1450px;
  margin: auto;
  overflow: hidden;
`;

const Slide = styled.div`
  display: none;
  img {
    width: 100%;
  }
`;

const DotsContainer = styled.div`
  text-align: center;
`;

// const Dot = styled.span`
//   cursor: pointer;
//   height: 15px;
//   width: 15px;
//   margin: 0 2px 0 2px;
//   background-color: #bbb;
//   border-radius: 50%;
//   display: inline-block;
//   transition: background-color 0.6s ease;

//   &.active {
//     background-color: #717171;
//   }
// `;

const Slideshow = ({ images, interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  return (
    <SlideshowContainer>
      {images.map((image, index) => (
        <Slide key={index} style={{ display: index === currentSlide ? 'block' : 'none', marginBottom:'-11px' }}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </Slide>
      ))}
      {/* <DotsContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            className={index === currentSlide ? 'active' : ''}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </DotsContainer> */}
    </SlideshowContainer>
  );
};

export default Slideshow;
