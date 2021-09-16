import { Main } from "./main/main";
import { addImage } from "./add_image";
import { Component } from "../core/component";
import { Result } from "./result/result";

class App extends Component {
    setup() {
        this.state = {
            checkin: null,
            checkout: null,
            minPrice: null,
            maxPrice: null,
            numOfAdult: null,
            numOfChild: null,
            numOfBaby: null,
        };
    }
    setEvent() {
        window.addEventListener("popstate", this.mounted.bind(this));
    }
    mounted() {
        const path = document.location.pathname;
        const $wrap = document.querySelector(".content_wrap");
        if (path === "/") {
            new Main($wrap, { submit: this.submit() });
        } else if (path === "/result") {
            new Result($wrap, this.state);
        }
    }
    submit() {
        return (inputObj) => {
            window.history.pushState(inputObj, "", "/result");
            this.setState(inputObj);
        };
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const $wrap = document.querySelector(".content_wrap");
    new App($wrap, {});
    addImage();
});
