import { Fragment, useState } from "react";

import Styles from "./Gallery.module.css";

import { Images } from "./ImageSource/Images";

const Gallery = () => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (img) => {
    setTempImgSrc(img);
    setModel(true);  }

  return (
    <Fragment>
      <div className={model ? `${Styles.modal} ${Styles.modalOpen} `: Styles.modal}>
        <img src={tempImgSrc}  alt={tempImgSrc}/>
      </div>
     <div className={Styles.Gallery}>
      {Images.map((image) => (
        <div className={Styles.Images} key={image.id}>
          <img
            src={image.img}
            alt={image.img}
            onClick={() => getImg(image.img)}
          />
        </div>
      ))}
    </div> 
    </Fragment>
    
  );
};

export default Gallery;
