import backgroundImage from '../img/main_background.png';
import mainLogo from '../img/logo.png';
import loginMenu from '../img/login_menu.png';
import searchButton from '../img/search_button.png';

export default function addImage() {
    const imgs = [backgroundImage, mainLogo, loginMenu, searchButton];
    const containerSelectors = ['.header_background', '.logo', '.login_btn', '.submit_btn'];

    imgs.forEach((v, i) => {
        const container = document.querySelector(containerSelectors[i]);
        const imgTag = document.createElement('img');
        imgTag.src = v;
        container.appendChild(imgTag);
    });
}