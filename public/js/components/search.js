import { Component } from "../core/component.js";

export class Search extends Component {
    setup() {
        this.$target = document.querySelector("main_box");
    }
    template() {
        return `<div class="search_box"></div>`;
    }
}
