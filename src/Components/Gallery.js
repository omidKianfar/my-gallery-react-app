import { Fragment, useState } from "react";
import CloseButton from "react-bootstrap/CloseButton";

import Styles from "./Gallery.module.css";

import { Images } from "./ImageSource/Images";
import { getImgSrc } from "../utils/getImgSrc";

const Gallery = () => {
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  return (
    <Fragment>
      <div
        className={
          modal ? `${Styles.modal} ${Styles.modalOpen} ` : Styles.modal
        }
      >
        <img src={tempImgSrc} alt={tempImgSrc} />
        <CloseButton
          variant="white"
          className={Styles.CloseButton}
          onClick={() => setModal(false)}
        />
      </div>

      <div className={Styles.Gallery}>
        {Images.map((image) => (
          <div className={Styles.Images} key={image.id}>
            <img
              src={image.img}
              alt={image.img}
              onClick={() => getImgSrc(image.img, setTempImgSrc, setModal)}
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Gallery;
