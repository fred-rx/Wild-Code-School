import React from "react";
import { useState } from "react";

function MenuItem({element, index}) {

  console.log(element)
  const [isFavorite, setIsFavorite] = useState(element.isFavorite)

  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <section className="itemContainer">
      <figure className="imgContainer">
        {/* the image will receive the url src from the props */}
        {console.log(element.itemName)}
        <img src={element.foodImage} alt={element.itemName} />
        <figcaption>
          {/* the h2 will receive the item name from the props */}
          <h2>{element.itemName}</h2>
          {/* the p will receive the item description from the props */}
          <p>{element.description}</p>
        </figcaption>
      </figure>
      {/* the span will receive the item price from the props */}
      <span>{element.price} EUR</span>

      {/* the button to play with the isFavorite state:
              - onClick, will toggle the isFavorite state,
              - content will be conditionally rendered as "❤️" or "🖤", depending on the value of isFavorite
          */}
      <button onClick={handleClickFavorite}>{isFavorite === true ? "❤️" : "🖤"}</button>
    </section>
  );

}

export default MenuItem;q