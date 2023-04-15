import Img from "./restaurant.jpg";

const pageLoad = () => {
  console.log("Hi, everyone!!");
  const content = document.querySelector("#content");

  const restaurantImg = document.createElement("img");
  restaurantImg.src = Img;

  const title = document.createElement("h1");
  title.textContent = "The Best Restaurant In The World";

  const description = document.createElement("p");
  description.textContent =
    "In 2019, the Best of the Best category was created, a hall of fame for restaurants that have reached the pinnacle of the No.1 position in The World’s 50 Best Restaurants list. With the creation of this list, No.1 winners are no longer eligible to be voted on new editions of the list.";

  content.appendChild(restaurantImg);
  content.appendChild(title);
  content.appendChild(description);
};

export { pageLoad };
