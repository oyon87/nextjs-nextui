import { useRef } from "react";

function ImagesGallery({ images }) {
  const thumbnailRef = useRef("");
  const handleImageClick = (src) => {
    thumbnailRef.current.src = src;
  };

  return (
    <>
      <div className="bg-slate-200 h-80 mb-3 flex justify-center items-center">
        <img src={images[0]} alt="Thumbnail Image" className="object-contain" ref={thumbnailRef} />
      </div>
      <div className="grid grid-cols-4 gap-3 bg-slate-200">
        {images?.map((image, index) => {
          return (
            <img
              src={image}
              alt={`Image-${index}`}
              key={index}
              className="border object-contain cursor-pointer"
              onClick={() => handleImageClick(image)}
            />
          );
        })}
      </div>
    </>
  );
}

export default ImagesGallery;
