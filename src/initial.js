import Img from "./restaurant.jpg";

const pageLoad = () => {
  console.log("Hi, everyone!!");
  const content = document.querySelector("#content");

  const restaurantImg = document.createElement("img");
  restaurantImg.src = Img;

  const title = document.createElement("h1");
  title.textContent = "Decadence by Cocoa";

  const description = document.createElement("p");
  description.textContent =
    "Indulge in the ultimate chocolate experience at Decadence by Cocoa. Our carefully crafted menu showcases the best of the chocolate world, while our refined and elegant ambiance creates an unforgettable atmosphere.";

  content.appendChild(title);
  content.appendChild(restaurantImg);
  content.appendChild(description);
};

export { pageLoad };
