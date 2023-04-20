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

  const divOne = document.createElement("div");
  divOne.classList.add("comment");
  const commentUserOne = document.createElement("q");
  commentUserOne.textContent =
    "We believe that chocolate is more than just a dessert, it's an experience to be savored and appreciated.";
  const commentUserOneName = document.createElement("p");
  commentUserOneName.textContent = "- General Manager";
  divOne.appendChild(commentUserOne);
  divOne.appendChild(commentUserOneName);

  const divTwo = document.createElement("div");
  divTwo.classList.add("comment");
  const commentUserTwo = document.createElement("q");
  commentUserTwo.textContent =
    "I have to say, my taste buds have never been happier than they were at this chocolate restaurant. The first bite of the chocolate lava cake was like a warm embrace from an old friend.";
  const commentUserTwoName = document.createElement("p");
  commentUserTwoName.textContent = "- Happy Costumer";
  divTwo.appendChild(commentUserTwo);
  divTwo.appendChild(commentUserTwoName);

  const divThree = document.createElement("div");
  divThree.classList.add("comment");
  const commentUserThree = document.createElement("q");
  commentUserThree.textContent =
    "I couldn't get enough of the rich, gooey goodness that melted in my mouth like a dream. And let's not forget about the drinks! The hot chocolate was so decadent and creamy, it was like sipping on liquid gold.";
  const commentUserThreeName = document.createElement("p");
  commentUserThreeName.textContent = "- Food Critic";
  divThree.appendChild(commentUserThree);
  divThree.appendChild(commentUserThreeName);

  const divFour = document.createElement("div");
  divFour.classList.add("comment");
  const commentUserFour = document.createElement("q");
  commentUserFour.textContent =
    "The atmosphere of the restaurant was cozy and inviting, with a touch of elegance that made me feel like royalty. I'll definitely be back for more chocolatey magic!";
  const commentUserFourName = document.createElement("p");
  commentUserFourName.textContent = "- Another Happy Customer";
  divFour.appendChild(commentUserFour);
  divFour.appendChild(commentUserFourName);

  const divSchedule = document.createElement("div");
  divSchedule.classList.add("schedule");
  const scheduleTitle = document.createElement("h2");
  scheduleTitle.textContent = "Schedule";
  const scheduleMon = document.createElement("p");
  scheduleMon.textContent = "Monday: 8:00am - 6:00pm";
  const scheduleTue = document.createElement("p");
  scheduleTue.textContent = "Tuesday: 8:00am - 6:00pm";
  const scheduleWed = document.createElement("p");
  scheduleWed.textContent = "Wednesday: 8:00am - 6:00pm";
  const scheduleThu = document.createElement("p");
  scheduleThu.textContent = "Thursday: 8:00am - 6:00pm";
  const scheduleFri = document.createElement("p");
  scheduleFri.textContent = "Friday: 10:00am - 10:00pm";
  const scheduleSat = document.createElement("p");
  scheduleSat.textContent = "Saturday: 10:00am - 10:00pm";
  const scheduleSun = document.createElement("p");
  scheduleSun.textContent = "Sunday: 10:00am - 10:00pm";
  divSchedule.appendChild(scheduleTitle);
  divSchedule.appendChild(scheduleMon);
  divSchedule.appendChild(scheduleTue);
  divSchedule.appendChild(scheduleWed);
  divSchedule.appendChild(scheduleThu);
  divSchedule.appendChild(scheduleFri);
  divSchedule.appendChild(scheduleSat);
  divSchedule.appendChild(scheduleSun);

  content.appendChild(title);
  content.appendChild(restaurantImg);
  content.appendChild(description);
  content.appendChild(divOne);
  content.appendChild(divTwo);
  content.appendChild(divThree);
  content.appendChild(divFour);
  content.appendChild(divSchedule);
};

export { pageLoad };
