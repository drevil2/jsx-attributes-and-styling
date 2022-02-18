import React from "react";
import ReactDOM from "react-dom";

const pizza =
  "https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg";

const lasagna =
  "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg";

const beef =
  "https://upload.wikimedia.org/wikipedia/commons/a/a3/Rostas_%28ready_and_served%29.JPG";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img className="food-img" src={pizza} />
      <img className="food-img" src={lasagna} />
      <img className="food-img" src={beef} />
    </div>
  </div>,
  document.getElementById("root")
);
