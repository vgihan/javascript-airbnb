import { Component } from "../core/component.js";

export class Bar extends Component {
    setup() {
        this.$state = {
            checkin: {
                check: "",
                title: "체크인",
                placeholder: "날짜 입력",
            },
            checkout: {
                check: "",
                title: "체크아웃",
                placeholder: "날짜 입력",
            },
            price: {
                check: "",
                title: "요금",
                placeholder: "금액대 입력",
            },
            number: {
                check: "",
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
                .replace("{{checkClass}}", this.$state[className].check)
                .replace("{{title}}", this.$state[className].title)
                .replace("{{placeholder}}", this.$state[className].placeholder);
            return pre;
        }, "");
        return `${items}
        <div class="search_bar_item submit">
            <div class="submit_btn"></div>
        </div>`;
    }
    setEvent() {
        this.addEvent("click", ".search_bar", (ev) => {
            this.changeCheckState.bind(this)(ev);
        });
    }
    changeCheckState(ev) {
        const target = ev.target.closest(".search_bar_item");
        const items = ["checkin", "checkout", "price", "number"];
        items.forEach((item) => {
            const isBarItem = target.classList.contains(item);
            const isChecked = this.$state[item].check === "checked_item";
            if (isBarItem && !isChecked) {
                this.setState(this.toggleCheck(this.$state, item));
            } else if (isBarItem && isChecked) {
                this.setState(this.removeCheck(this.$state, item));
            }
        });
    }
    removeCheck(state, target) {
        return Object.keys(state).reduce((pre, item) => {
            if (target === item) {
                pre[item].check = "";
            }
            return pre;
        }, state);
    }
    toggleCheck(state, target) {
        return Object.keys(state).reduce((pre, item) => {
            if (target === item) {
                pre[item].check = "checked_item";
            } else {
                pre[item].check = "";
            }
            return pre;
        }, state);
    }
}
