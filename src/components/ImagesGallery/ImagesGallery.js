import { useRef } from "react";

function ImagesGallery({ images }) {
  const thumbnailRef = useRef("");

  const handleImageClick = (src) => {
    thumbnailRef.current.src = src;
  };

  return (
    <>
      <div className="bg-slate-200 h-80 mb-3 flex justify-center items-center">
        <img src={images[0]} alt="Thumbnail Image" className="object-contain w-full h-full" ref={thumbnailRef} />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {images?.map((image, index) => {
          return (
            <div className="border cursor-pointer h-16 flex justify-center items-center bg-slate-200" key={index}>
              <img
                src={image}
                alt={`Image-${index}`}
                className="object-contain w-full h-full"
                onClick={() => handleImageClick(image)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ImagesGallery;
