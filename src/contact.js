const contact = () => {
  const title = document.createElement("h1");
  title.textContent = "Contact Us";

  const mainContainer = document.createElement("div");
  const addressContainer = document.createElement("div");
  const address = document.createElement("h2");
  address.textContent = "Address";
  const addressText = document.createElement("p");
  addressText.textContent = "1445 West Norwood Avenue, Itasca, Illinois.";
  addressContainer.appendChild(address);
  addressContainer.appendChild(addressText);

  const phoneContainer = document.createElement("div");
  const phone = document.createElement("h2");
  phone.textContent = "Phone";
  const phoneText = document.createElement("p");
  phoneText.textContent = "555-444-5555";
  phoneContainer.appendChild(phone);
  phoneContainer.appendChild(phoneText);

  const emailContainer = document.createElement("div");
  const email = document.createElement("h2");
  email.textContent = "Email";
  const emailText = document.createElement("p");
  emailText.textContent = "chocoCrush@sweet.com";
  emailContainer.appendChild(email);
  emailContainer.appendChild(emailText);

  mainContainer.appendChild(addressContainer);
  mainContainer.appendChild(phoneContainer);
  mainContainer.appendChild(emailContainer);

  const content = document.querySelector("#content");
  content.appendChild(title);
  content.appendChild(mainContainer); 
};

export { contact };
