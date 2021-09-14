import { Main } from "./main";
import { addImage } from "./add_image";
import { Component } from "../core/component";
import { Result } from "./result";

class App extends Component {
    setup() {
        this.$state = {
            page: "",
            checkin: null,
            checkout: null,
            minPrice: null,
            maxPrice: null,
            numOfAdult: null,
            numOfChild: null,
            numOfBaby: null,
        };
    }
    mounted() {
        const $wrap = document.querySelector(".content_wrap");
        const { page } = this.$state;
        if (page === "") {
            new Main($wrap, { submit: this.submit() });
        } else if (page === "result") {
            new Result($wrap, this.$state);
        }
    }
    submit() {
        return (inputObj) => {
            this.setState(inputObj);
        };
    }
}

(function () {
    const $wrap = document.querySelector(".content_wrap");
    new App($wrap, {});
    addImage();
})();
