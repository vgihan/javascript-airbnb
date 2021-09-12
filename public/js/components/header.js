import { Component } from "../core/component";

export class Header extends Component {
    template() {
        return document.querySelector("#template_header").innerHTML;
    }
    render() {
        this.$target.insertAdjacentHTML("afterbegin", this.template());
    }
}
