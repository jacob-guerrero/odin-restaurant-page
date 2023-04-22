const menu = () => {
  const content = document.querySelector("#content");

  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main-div');

  const title = document.createElement("h1");
  title.textContent = "Menu";
  title.classList.add('main-title');
  mainDiv.appendChild(title);

  const mainContainer = document.createElement("div");
  mainContainer.classList.add('main-container')

  // Appetizers:
  const appetizerContainer = document.createElement("div");
  appetizerContainer.classList.add('course');
  const appetizerOne = document.createElement('div');
  appetizerOne.classList.add('box');
  const appetizer = document.createElement("h2");
  appetizer.classList.add('course-title');
  appetizer.textContent = "Appetizer";
  const appetizerNameOne = document.createElement("h3");
  appetizerNameOne.textContent = "Chocolate-Stuffed Strawberries";
  const appetizerDescriptionOne = document.createElement("p");
  appetizerDescriptionOne.textContent = "Fresh strawberries filled with creamy chocolate ganache, served with a dollop of whipped cream and a sprinkle of cocoa powder.";

  const appetizerTwo = document.createElement('div');
  appetizerTwo.classList.add('box');
  const appetizerNameTwo = document.createElement("h3");
  appetizerNameTwo.textContent = "Chocolate and Cheese Board";
  const appetizerDescriptionTwo = document.createElement("p");
  appetizerDescriptionTwo.textContent = "A selection of artisanal cheeses paired with rich chocolate, fresh fruit, and toasted nuts.";

  const appetizerThree = document.createElement('div');
  appetizerThree.classList.add('box');
  const appetizerNameThree = document.createElement("h3");
  appetizerNameThree.textContent = "Cocoa-Dusted Popcorn";
  const appetizerDescriptionThree = document.createElement("p");
  appetizerDescriptionThree.textContent = "Sweet and salty popcorn coated in rich, velvety cocoa powder.";
  appetizerContainer.appendChild(appetizer);
  appetizerOne.appendChild(appetizerNameOne);
  appetizerOne.appendChild(appetizerDescriptionOne);
  appetizerContainer.appendChild(appetizerOne);
  appetizerTwo.appendChild(appetizerNameTwo);
  appetizerTwo.appendChild(appetizerDescriptionTwo);
  appetizerContainer.appendChild(appetizerTwo);
  appetizerThree.appendChild(appetizerNameThree);
  appetizerThree.appendChild(appetizerDescriptionThree);
  appetizerContainer.appendChild(appetizerThree);

  // Entrees:
  const entreeContainer = document.createElement("div");
  entreeContainer.classList.add('course');
  const entreeOne = document.createElement('div');
  entreeOne.classList.add('box');
  const entree = document.createElement("h2");
  entree.classList.add('course-title');
  entree.textContent = "Entree";
  const entreeNameOne = document.createElement("h3");
  entreeNameOne.textContent = "Cocoa-Rubbed Steak";
  const entreeDescriptionOne = document.createElement("p");
  entreeDescriptionOne.textContent = "A juicy steak seasoned with a blend of cocoa powder, smoked paprika, and spices, served with a side of roasted sweet potatoes and sautéed kale.";
  
  const entreeTwo = document.createElement('div');
  entreeTwo.classList.add('box');
  const entreeNameTwo = document.createElement("h3");
  entreeNameTwo.textContent = "Chocolate-Crusted Salmon";
  const entreeDescriptionTwo = document.createElement("p");
  entreeDescriptionTwo.textContent = "A fillet of fresh salmon coated in a crunchy chocolate crust, served with a side of roasted vegetables and a drizzle of balsamic reduction.";

  const entreeThree = document.createElement('div');
  entreeThree.classList.add('box');
  const entreeNameThree = document.createElement("h3");
  entreeNameThree.textContent = "Mushroom and Truffle Risotto";
  const entreeDescriptionThree = document.createElement("p");
  entreeDescriptionThree.textContent = "Creamy risotto with earthy mushrooms, shaved truffles, and a touch of dark chocolate, finished with Parmesan cheese and fresh herbs.";
  entreeContainer.appendChild(entree);
  entreeOne.appendChild(entreeNameOne);
  entreeOne.appendChild(entreeDescriptionOne);
  entreeContainer.appendChild(entreeOne);
  entreeTwo.appendChild(entreeNameTwo);
  entreeTwo.appendChild(entreeDescriptionTwo);
  entreeContainer.appendChild(entreeTwo);
  entreeThree.appendChild(entreeNameThree);
  entreeThree.appendChild(entreeDescriptionThree);
  entreeContainer.appendChild(entreeThree);

  // Desserts:
  const dessertContainer = document.createElement("div");
  dessertContainer.classList.add('course');
  const dessertOne = document.createElement('div');
  dessertOne.classList.add('box');
  const dessert = document.createElement("h2");
  dessert.classList.add('course-title');
  dessert.textContent = "Dessert";
  const dessertNameOne = document.createElement("h3");
  dessertNameOne.textContent = "Chocolate Molten Cake";
  const dessertDescriptionOne = document.createElement("p");
  dessertDescriptionOne.textContent = "A warm, gooey chocolate cake with a molten center, served with a scoop of vanilla ice cream and fresh berries.";

  const dessertTwo = document.createElement('div');
  dessertTwo.classList.add('box');
  const dessertNameTwo = document.createElement("h3");
  dessertNameTwo.textContent = "Dark Chocolate Fondue";
  const dessertDescriptionTwo = document.createElement("p");
  dessertDescriptionTwo.textContent = "A pot of rich, melted dark chocolate for dipping fresh fruit, marshmallows, and pound cake.";

  const dessertThree = document.createElement('div');
  dessertThree.classList.add('box');
  const dessertNameThree = document.createElement("h3");
  dessertNameThree.textContent = "Chocolate Chip Cookie Dough Cheesecake";
  const dessertDescriptionThree = document.createElement("p");
  dessertDescriptionThree.textContent = "A decadent cheesecake filled with chunks of chocolate chip cookie dough and topped with a chocolate drizzle.";
  dessertContainer.appendChild(dessert);
  dessertOne.appendChild(dessertNameOne);
  dessertOne.appendChild(dessertDescriptionOne);
  dessertContainer.appendChild(dessertOne);
  dessertTwo.appendChild(dessertNameTwo);
  dessertTwo.appendChild(dessertDescriptionTwo);
  dessertContainer.appendChild(dessertTwo);
  dessertThree.appendChild(dessertNameThree);
  dessertThree.appendChild(dessertDescriptionThree);
  dessertContainer.appendChild(dessertThree);

  // Beverages:
  const beverageContainer = document.createElement("div");
  beverageContainer.classList.add('course');
  const beverageOne = document.createElement('div');
  beverageOne.classList.add('box');
  const beverage = document.createElement("h2");
  beverage.classList.add('course-title');
  beverage.textContent = "Beverage";
  const beverageNameOne = document.createElement("h3");
  beverageNameOne.textContent = "Hot Chocolate";
  const beverageDescriptionOne = document.createElement("p");
  beverageDescriptionOne.textContent = "A classic blend of rich, velvety chocolate and steamed milk, topped with whipped cream and chocolate shavings.";

  const beverageTwo = document.createElement('div');
  beverageTwo.classList.add('box');
  const beverageNameTwo = document.createElement("h3");
  beverageNameTwo.textContent = "Chocolate Martini";
  const beverageDescriptionTwo = document.createElement("p");
  beverageDescriptionTwo.textContent = "A creamy, indulgent blend of chocolate liqueur, vodka, and cream, garnished with a chocolate-dipped strawberry.";

  const beverageThree = document.createElement('div');
  beverageThree.classList.add('box');
  const beverageNameThree = document.createElement("h3");
  beverageNameThree.textContent = "Chocolate Milkshake";
  const beverageDescriptionThree = document.createElement("p");
  beverageDescriptionThree.textContent = "A thick, creamy milkshake made with real chocolate ice cream and topped with whipped cream and chocolate syrup.";
  beverageContainer.appendChild(beverage);
  beverageOne.appendChild(beverageNameOne);
  beverageOne.appendChild(beverageDescriptionOne);
  beverageContainer.appendChild(beverageOne);
  beverageTwo.appendChild(beverageNameTwo);
  beverageTwo.appendChild(beverageDescriptionTwo);
  beverageContainer.appendChild(beverageTwo);
  beverageThree.appendChild(beverageNameThree);
  beverageThree.appendChild(beverageDescriptionThree);
  beverageContainer.appendChild(beverageThree);

  mainContainer.appendChild(appetizerContainer);
  mainContainer.appendChild(entreeContainer);
  mainContainer.appendChild(dessertContainer);
  mainContainer.appendChild(beverageContainer);
 
  content.appendChild(mainDiv);
  content.appendChild(mainContainer);
};

export { menu };
