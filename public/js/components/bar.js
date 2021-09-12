import { Component } from "../core/component.js";

export class Bar extends Component {
    setup() {
        this.$target = document.querySelector("search_box");
        this.$state = {
            checkin: {
                checkClass: this.$state["checkin"],
                title: "체크인",
                placeholder: "날짜 입력",
            },
            checkout: {
                checkClass: this.$state["checkout"],
                title: "체크아웃",
                placeholder: "날짜 입력",
            },
            price: {
                checkClass: this.$state["price"],
                title: "요금",
                placeholder: "금액대 입력",
            },
            number: {
                checkClass: this.$state["number"],
                title: "인원",
                placeholder: "게스트 추가",
            },
        };
    }
    template() {
        const searchItemTemplate = document.querySelector(
            "#template_search_item"
        ).innerHTML;
        const items = Object.keys(this.$state).reduce((pre, className) => {
            pre += searchItemTemplate
                .replace("{{className}}", className)
                .replace("{{checkClass}}", info[className].checkClass)
                .replace("{{title}}", info[className].title)
                .replace("{{placeholder}}", info[className].placeholder);
            return pre;
        }, "");
        return `<div class="search_bar">
            ${items}
            <div class="search_bar_item submit">
                <div class="submit_btn"></div>
            </div>
        </div>`;
    }
    setEvent() {
        document.querySelector("search_bar").addEventListener("click");
    }
}
