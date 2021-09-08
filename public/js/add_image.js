import backgroundImage from '../img/main_background.png';
import mainLogo from '../img/logo.png';
import loginMenu from '../img/login_menu.png';
import searchButton from '../img/search_button.png';
import leftDate from '../img/left.png';
import rightDate from '../img/right.png';

export function addHeaderImage() {
    const imgs = [backgroundImage, mainLogo, loginMenu];
    const containerSelectors = ['.header_background', '.logo', '.login_btn'];
    addImage(imgs, containerSelectors);
}

export function addSearchImage() {
    const imgs = [searchButton];
    const containerSelectors = ['.submit_btn'];
    addImage(imgs, containerSelectors);
}

export function addCalendarImage() {
    const imgs = [leftDate, rightDate];
    const containerSelectors = ['.left_btn', '.right_btn'];
    addImage(imgs, containerSelectors);
}

function addImage(imgs, containerSelectors) {
    imgs.forEach((v, i) => {
        const container = document.querySelector(containerSelectors[i]);
        const imgTag = document.createElement('img');
        imgTag.src = v;
        container.appendChild(imgTag);
    });
}