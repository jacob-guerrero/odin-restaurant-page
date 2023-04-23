import { pageLoad } from "./initial";
import { contact } from "./contact";
import { menu } from "./menu";
import "./style.css";

const tabs = document.querySelectorAll(".tab");
const content = document.querySelector("#content");

const clearContent = () => {
  content.replaceChildren();
};
const activeTab = (tab) => {
  tabs.forEach((option) => {
    option.classList.remove("active");
  });
  tab.classList.add("active");
};

// Default Home:
pageLoad();
document.getElementById('home').classList.add('active');

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    switch (tab.id) {
      case "home":
        if (tab.classList.contains("active")) {
          break;
        }
        activeTab(tab);
        clearContent();
        pageLoad();
        break;

      case "menu":
        if (tab.classList.contains("active")) {
          break;
        }
        activeTab(tab);
        clearContent();
        menu();
        break;

      case "contact":
        if (tab.classList.contains("active")) {
          break;
        }
        activeTab(tab);
        clearContent();
        contact();
        break;

      default:
        break;
    }
  });
});
