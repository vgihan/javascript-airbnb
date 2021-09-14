import { Component } from "../core/component.js";
import { Header } from "./header";
import { Search } from "./search";

export class Main extends Component {
    template() {
        return `<div class="main_box">
            <header></header>
            <div class="search_box"></div>
        </div>`;
    }
    mounted() {
        const $search = this.$target.querySelector(".search_box");
        const $header = this.$target.querySelector("header");
        const { submit } = this.$props;

        new Search($search, { submit });
        new Header($header, {});
    }
}
