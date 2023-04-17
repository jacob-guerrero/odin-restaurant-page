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

    //I have to say, my taste buds have never been happier than they were at this chocolate restaurant. The first bite of the chocolate lava cake was like a warm embrace from an old friend. I couldn't get enough of the rich, gooey goodness that melted in my mouth like a dream. And let's not forget about the drinks! The hot chocolate was so decadent and creamy, it was like sipping on liquid gold. The atmosphere of the restaurant was cozy and inviting, with a touch of elegance that made me feel like royalty. I'll definitely be back for more chocolatey magic!

  content.appendChild(restaurantImg);
  content.appendChild(title);
  content.appendChild(description);
};

export { pageLoad };
