import { useState } from "react";

import Styles from "./Gallery.module.css";

import { Images } from "./ImageSource/Images";

const Gallery = () => {
  const [tempImgSrc, setTempImgSrc] = useState("");

  return (
    <div className={Styles.Gallery}>
      {Images.map((image) => (
        <div className={Styles.Images} key={image.id}>
          <img
            src={image.img}
            alt={image.img}
            onClick={() => setTempImgSrc(image.img)}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
