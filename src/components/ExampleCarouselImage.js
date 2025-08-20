import React from 'react';

const ExampleCarouselImage = ({ src, alt, captionTitle, captionText }) => {
  return (
    <div className='examplecarouselimagesection'>
      <img
        className="d-block w-100" // Bootstrap utility classes for display and width
        src={src} // <-- THIS IS THE KEY CHANGE: Use the 'src' prop
        alt={alt} // Alt text passed as prop
         id="sliderimamage" // Inline style for height and cover
      />

      {/* Optional: Add a caption for Bootstrap Carousel items */}
      {captionTitle && (
        <div className="carousel-caption d-none d-md-block">
          {/* d-none d-md-block means hidden on small screens, visible on medium and up */}
          <h5>{captionTitle}</h5>
          <p>{captionText}</p>
        </div>
      )}
    </div>
  );
};

export default ExampleCarouselImage;

