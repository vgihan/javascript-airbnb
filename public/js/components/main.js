import { addImage } from "./add_image.js";
import { SearchView } from "./search.js";
import { DropdownView } from "./dropdown.js";
import { Component } from "../core/component.js";

class Main extends Component {
    constructor() {
        this.createView();
        this.render();
        this.registEventHandler();
    }
    render() {
        const header = document.querySelector("#template_header").innerHTML;
        const search = this.searchView.render();
        const dropdown = this.dropdownView.render();
        document.querySelector(".content_wrap").innerHTML =
            header + search + dropdown.content;
        this.event.emit("regist_handler");
        if (dropdown.option !== "")
            this.event.emit(`${dropdown.option}_regist_handler`);
        addImage();
    }
    createView() {
        const items = [
            { className: "checkin", title: "체크인", placeholder: "날짜 입력" },
            {
                className: "checkout",
                title: "체크아웃",
                placeholder: "날짜 입력",
            },
            { className: "price", title: "요금", placeholder: "금액대 설정" },
            { className: "number", title: "인원", placeholder: "게스트 추가" },
        ];
        this.searchView = new SearchView(items, this.event);
        this.dropdownView = new DropdownView(this.event);
    }
}
const mainView = new MainView();
