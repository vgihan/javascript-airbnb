import { Main } from "./main";
import { addImage } from "./add_image";
import { Component } from "../core/component";

class App extends Component {
    mounted() {
        const $wrap = document.querySelector(".content_wrap");

        new Main($wrap, {});
    }
}

(function () {
    const $wrap = document.querySelector(".content_wrap");
    new App($wrap, {});
    addImage();
})();
