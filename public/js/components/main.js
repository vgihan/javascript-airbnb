import { Component } from "../core/component.js";
import { Header } from "./header";
import { Search } from "./search";

export class Main extends Component {
    template() {
        return `<div class="main_box"></div>`;
    }
    mounted() {
        const $main = document.querySelector(".main_box");

        new Search($main, {});
        new Header($main, {});
    }
}
