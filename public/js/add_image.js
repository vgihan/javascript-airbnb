import backgroundImage from '../img/main_background.png';
import mainLogo from '../img/logo.png';
import loginMenu from '../img/login_menu.png';
import searchButton from '../img/search_button.png';

export function addImage() {
    const imgs = [backgroundImage, mainLogo, loginMenu, searchButton];
    const containerSelectors = ['.header_background', '.logo', '.login_btn', '.submit_btn'];
    appendImage(imgs, containerSelectors);
}

function appendImage(imgs, containerSelectors) {
    imgs.forEach((imgSrc, i) => {
        const container = document.querySelector(containerSelectors[i]);
        const imgTag = document.createElement('img');
        imgTag.src = imgSrc;
        container.appendChild(imgTag);
    });
}