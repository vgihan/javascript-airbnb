import { Main } from "./main/main";
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
            if (!this.resultPageDataValidation()) {
                alert("필수 입력 값을 입력해야합니다.");
                window.history.back();
                new Main($wrap, { submit: this.submit() });
                return;
            }
            new Result($wrap, this.state);
        }
    }
    submit() {
        return (inputObj) => {
            window.history.pushState(inputObj, "", "/result");
            this.setState(inputObj);
        };
    }
    resultPageDataValidation() {
        const {
            checkin,
            checkout,
            minPrice,
            maxPrice,
            numOfAdult,
            numOfChild,
            numOfBaby,
        } = this.state;
        return (
            checkin &&
            checkout &&
            minPrice &&
            maxPrice &&
            numOfAdult > 0 &&
            numOfChild >= 0 &&
            numOfBaby >= 0
        );
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const $wrap = document.querySelector(".content_wrap");
    new App($wrap, {});
});
