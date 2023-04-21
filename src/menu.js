const menu = () => {
  const title = document.createElement("h1");
  title.classList.add('main-title');
  title.textContent = "Menu";

  const mainContainer = document.createElement("div");

  // Appetizers:
  const appetizerContainer = document.createElement("div");
  const appetizerOne = document.createElement('div');
  const appetizer = document.createElement("h2");
  appetizer.textContent = "Appetizer";
  const appetizerNameOne = document.createElement("h3");
  appetizerNameOne.textContent = "Chocolate-Stuffed Strawberries";
  const appetizerDescriptionOne = document.createElement("p");
  appetizerDescriptionOne.textContent = "Fresh strawberries filled with creamy chocolate ganache, served with a dollop of whipped cream and a sprinkle of cocoa powder.";

  const appetizerTwo = document.createElement('div');
  const appetizerNameTwo = document.createElement("h3");
  appetizerNameTwo.textContent = "Chocolate and Cheese Board";
  const appetizerDescriptionTwo = document.createElement("p");
  appetizerDescriptionTwo.textContent = "A selection of artisanal cheeses paired with rich chocolate, fresh fruit, and toasted nuts.";

  const appetizerThree = document.createElement('div');
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
  const entreeOne = document.createElement('div');
  const entree = document.createElement("h2");
  entree.textContent = "Entree";
  const entreeNameOne = document.createElement("h3");
  entreeNameOne.textContent = "Cocoa-Rubbed Steak";
  const entreeDescriptionOne = document.createElement("p");
  entreeDescriptionOne.textContent = "A juicy steak seasoned with a blend of cocoa powder, smoked paprika, and spices, served with a side of roasted sweet potatoes and sautéed kale.";
  
  const entreeTwo = document.createElement('div');
  const entreeNameTwo = document.createElement("h3");
  entreeNameTwo.textContent = "Chocolate-Crusted Salmon";
  const entreeDescriptionTwo = document.createElement("p");
  entreeDescriptionTwo.textContent = "A fillet of fresh salmon coated in a crunchy chocolate crust, served with a side of roasted vegetables and a drizzle of balsamic reduction.";

  const entreeThree = document.createElement('div');
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
  const dessertOne = document.createElement('div');
  const dessert = document.createElement("h2");
  dessert.textContent = "Dessert";
  const dessertNameOne = document.createElement("h3");
  dessertNameOne.textContent = "Chocolate Molten Cake";
  const dessertDescriptionOne = document.createElement("p");
  dessertDescriptionOne.textContent = "A warm, gooey chocolate cake with a molten center, served with a scoop of vanilla ice cream and fresh berries.";

  const dessertTwo = document.createElement('div');
  const dessertNameTwo = document.createElement("h3");
  dessertNameTwo.textContent = "Dark Chocolate Fondue";
  const dessertDescriptionTwo = document.createElement("p");
  dessertDescriptionTwo.textContent = "A pot of rich, melted dark chocolate for dipping fresh fruit, marshmallows, and pound cake.";

  const dessertThree = document.createElement('div');
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
  const beverageOne = document.createElement('div');
  const beverage = document.createElement("h2");
  beverage.textContent = "Beverage";
  const beverageNameOne = document.createElement("h3");
  beverageNameOne.textContent = "Hot Chocolate";
  const beverageDescriptionOne = document.createElement("p");
  beverageDescriptionOne.textContent = "A classic blend of rich, velvety chocolate and steamed milk, topped with whipped cream and chocolate shavings.";

  const beverageTwo = document.createElement('div');
  const beverageNameTwo = document.createElement("h3");
  beverageNameTwo.textContent = "Chocolate Martini";
  const beverageDescriptionTwo = document.createElement("p");
  beverageDescriptionTwo.textContent = "A creamy, indulgent blend of chocolate liqueur, vodka, and cream, garnished with a chocolate-dipped strawberry.";

  const beverageThree = document.createElement('div');
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

  const content = document.querySelector("#content");
  content.appendChild(title);
  content.appendChild(mainContainer);
};

export { menu };
