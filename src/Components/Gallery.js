import React from "react";

const Images = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1615751072497-5f5169febe17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    id: 2,
    img: "https://www.ingeniovirtual.com/promociona-tu-infografia/?p=6.44.6784837.4.21.54.crazy+dog+smile",
  },
  {
    id: 3,
    img: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2Nob3cuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDB9fX0=",
  },
  {
    id: 4,
    img: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2022-06/anna-brose-gus-dog-chewy-mc-220616-61d294.jpg",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1546708455-bcf526639c27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdoaXRlJTIwZG9nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    id: 6,
    img: "https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900",
  },
  {
    id: 7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0acytAxgbkRE8S3Jy_jdEXD0OTuSDCU5yA&usqp=CAU",
  },
];

const Gallery = () => {
  return (
    <div>
      {Images.map((image) => (
        <div key={image.id}>
          <img src={image.img} alt={image.img} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
