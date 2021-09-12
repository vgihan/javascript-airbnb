import { Main } from "./main";
import { addImage } from "./add_image";

export function app() {
    const $wrap = document.querySelector(".content_wrap");

    new Main($wrap, {});
}

app();
addImage();
