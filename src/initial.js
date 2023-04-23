import Img from "./img/restaurant.jpg";

const pageLoad = () => {
  const content = document.querySelector("#content");

  const mainDiv = document.createElement("div");
  mainDiv.classList.add("main-div");
  const restaurantImg = document.createElement("img");
  restaurantImg.src = Img;

  const title = document.createElement("h1");
  title.textContent = "Decadence by Cocoa";
  title.classList.add("main-title");

  mainDiv.appendChild(title);
  mainDiv.appendChild(restaurantImg);

  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent =
    "Indulge in the ultimate chocolate experience at Decadence by Cocoa. Our carefully crafted menu showcases the best of the chocolate world, while our refined and elegant ambiance creates an unforgettable atmosphere.";

  const divOne = document.createElement("div");
  divOne.classList.add("comment", "box");
  const commentUserOne = document.createElement("q");
  commentUserOne.textContent =
    "We believe that chocolate is more than just a dessert, it's an experience to be savored and appreciated.";
  const commentUserOneName = document.createElement("p");
  commentUserOneName.textContent = "- General Manager";
  commentUserOneName.classList.add("customer");
  divOne.appendChild(commentUserOne);
  divOne.appendChild(commentUserOneName);

  const divTwo = document.createElement("div");
  divTwo.classList.add("comment", "box");
  const commentUserTwo = document.createElement("q");
  commentUserTwo.textContent =
    "I have to say, my taste buds have never been happier than they were at this chocolate restaurant. The first bite of the chocolate lava cake was like a warm embrace from an old friend.";
  const commentUserTwoName = document.createElement("p");
  commentUserTwoName.textContent = "- Happy Costumer";
  commentUserTwoName.classList.add("customer");
  divTwo.appendChild(commentUserTwo);
  divTwo.appendChild(commentUserTwoName);

  const divThree = document.createElement("div");
  divThree.classList.add("comment", "box");
  const commentUserThree = document.createElement("q");
  commentUserThree.textContent =
    "I couldn't get enough of the rich, gooey goodness that melted in my mouth like a dream. And let's not forget about the drinks! The hot chocolate was so decadent and creamy, it was like sipping on liquid gold.";
  const commentUserThreeName = document.createElement("p");
  commentUserThreeName.textContent = "- Food Critic";
  commentUserThreeName.classList.add("customer");
  divThree.appendChild(commentUserThree);
  divThree.appendChild(commentUserThreeName);

  const divFour = document.createElement("div");
  divFour.classList.add("comment", "box");
  const commentUserFour = document.createElement("q");
  commentUserFour.textContent =
    "The atmosphere of the restaurant was cozy and inviting, with a touch of elegance that made me feel like royalty. I'll definitely be back for more chocolatey magic!";
  const commentUserFourName = document.createElement("p");
  commentUserFourName.textContent = "- Another Happy Customer";
  commentUserFourName.classList.add("customer");
  divFour.appendChild(commentUserFour);
  divFour.appendChild(commentUserFourName);

  const divSchedule = document.createElement("div");
  divSchedule.classList.add("schedule", "box");
  const scheduleTitle = document.createElement("h2");
  scheduleTitle.textContent = "Schedule";
  const scheduleMon = document.createElement("p");
  const spanMon = document.createElement("span");
  spanMon.textContent = "Monday: ";
  scheduleMon.textContent = "8:00am - 6:00pm";
  const scheduleTue = document.createElement("p");
  const spanTue = document.createElement("span");
  spanTue.textContent = "Tuesday: ";
  scheduleTue.textContent = "8:00am - 6:00pm";
  const scheduleWed = document.createElement("p");
  const spanWed = document.createElement("span");
  spanWed.textContent = "Wednesday: ";
  scheduleWed.textContent = "8:00am - 6:00pm";
  const scheduleThu = document.createElement("p");
  const spanThu = document.createElement("span");
  spanThu.textContent = "Thursday: ";
  scheduleThu.textContent = "8:00am - 6:00pm";
  const scheduleFri = document.createElement("p");
  const spanFri = document.createElement("span");
  spanFri.textContent = "Friday: ";
  scheduleFri.textContent = "10:00am - 10:00pm";
  const scheduleSat = document.createElement("p");
  const spanSat = document.createElement("span");
  spanSat.textContent = "Saturday: ";
  scheduleSat.textContent = "10:00am - 10:00pm";
  const scheduleSun = document.createElement("p");
  const spanSun = document.createElement("span");
  spanSun.textContent = "Sunday: ";
  scheduleSun.textContent = "10:00am - 10:00pm";

  divSchedule.append(
    scheduleTitle,
    scheduleMon,
    scheduleTue,
    scheduleWed,
    scheduleThu,
    scheduleFri,
    scheduleSat,
    scheduleSun
  );
  scheduleMon.prepend(spanMon);
  scheduleTue.prepend(spanTue);
  scheduleWed.prepend(spanWed);
  scheduleThu.prepend(spanThu);
  scheduleFri.prepend(spanFri);
  scheduleSat.prepend(spanSat);
  scheduleSun.prepend(spanSun);

  content.append(
    mainDiv,
    description,
    divOne,
    divTwo,
    divThree,
    divFour,
    divSchedule
  );
};

export { pageLoad };
