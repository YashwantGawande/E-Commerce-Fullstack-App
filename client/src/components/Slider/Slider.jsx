import React, { useEffect, useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import data from "./data";
import "./Slider.scss";

const Slider = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  });

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className="slider">
      <div className="container">
        {people.map((Gallery, imageIndex) => {
          const { id, name, image } = Gallery;
          let position = "nextSlide";
          if (imageIndex === index) {
            position = "activeSlide";
          }
          if (
            imageIndex === index - 1 ||
            (index === 0 && imageIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className={position} key={id} />
            </article>
          );
        })}
      </div>
      <div className="icons">
        <div className="icon" onClick={() => setIndex(index - 1)}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={() => setIndex(index + 1)}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
