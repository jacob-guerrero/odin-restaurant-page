import { pageLoad } from "./initial";
import { contact } from "./contact";
import { menu } from "./menu";
import './style.css';

const tabs = document.querySelectorAll('.tab');
const content = document.querySelector('#content');

const clearContent = () => {
    content.replaceChildren();
}

// pageLoad();
menu();

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        switch (tab.id) {
            case 'home':
                clearContent();
                pageLoad();
                break;
        
            case 'menu':
                clearContent();
                menu();
                break;
            
            case 'contact':
                clearContent();
                contact();
                break;

            default:
                clearContent();
                pageLoad();
                break;
        }
    })
});
