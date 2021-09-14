import { Main } from "./main";
import { addImage } from "./add_image";
import { Component } from "../core/component";

class App extends Component {
    setup() {
        this.$state = {
            page: "",
        };
    }
    mounted() {
        const $wrap = document.querySelector(".content_wrap");
        const { page } = this.$state;

        new Main($wrap, { submit: this.submit() });
    }
    submit() {
        return ({
            checkin,
            checkout,
            minPrice,
            maxPrice,
            numOfAdult,
            numOfChild,
            numOfBaby,
        }) => {};
    }
}

(function () {
    const $wrap = document.querySelector(".content_wrap");
    new App($wrap, {});
    addImage();
})();
