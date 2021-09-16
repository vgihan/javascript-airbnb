import { Component } from "../../core/component";
import backgroundImage from "../../../img/main_background.png";
import mainLogo from "../../../img/logo.png";
import loginMenu from "../../../img/login_menu.png";

export class Header extends Component {
    template() {
        return document.querySelector("#template_header").innerHTML;
    }
    render() {
        this.$target.insertAdjacentHTML("afterbegin", this.template());
        this.addImage();
    }
    addImage() {
        const background = this.$target.querySelector(
            ".header_background > img"
        );
        const logo = this.$target.querySelector(".logo > img");
        const loginMark = this.$target.querySelector(".login_btn > img");

        loginMark.src = loginMenu;
        logo.src = mainLogo;
        background.src = backgroundImage;
    }
}
