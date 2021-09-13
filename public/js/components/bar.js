import { Component } from "../core/component.js";

const CHECKED = false;
const UNCHECKED = true;

export class Bar extends Component {
    setup() {
        this.$state = {
            checkin: {
                title: "체크인",
                placeholder: "날짜 입력",
            },
            checkout: {
                title: "체크아웃",
                placeholder: "날짜 입력",
            },
            price: {
                title: "요금",
                placeholder: "금액대 입력",
            },
            number: {
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
            const placeholder =
                this.$props[className] === null
                    ? this.$state[className].placeholder
                    : this.getDateFormat(this.$props[className]);
            const checkClass =
                this.$props.selectType === className ? "checked_item" : "";
            pre += searchItemTemplate
                .replace("{{className}}", className)
                .replace("{{checkClass}}", checkClass)
                .replace("{{title}}", this.$state[className].title)
                .replace("{{placeholder}}", placeholder);
            return pre;
        }, "");
        return `${items}
        <div class="search_bar_item submit">
            <div class="submit_btn"></div>
        </div>`;
    }
    setEvent() {
        this.addEvent("click", ".search_bar", this.changeCheckState.bind(this));
    }
    changeCheckState(ev) {
        const { setSearchInput } = this.$props;
        const target = ev.target.closest(".search_bar_item");
        const itemType = {
            checkin: "calendar",
            checkout: "calendar",
            price: "price",
            number: "number",
        };
        Object.keys(itemType).forEach((item) => {
            const isBarItem = target.classList.contains(item);
            const isChecked = this.$props.selectType === item;
            if (isBarItem && !isChecked) {
                setSearchInput(this.makeNewState(itemType, item, UNCHECKED));
            } else if (isBarItem && isChecked) {
                setSearchInput(this.makeNewState(itemType, item, CHECKED));
            }
        });
    }
    makeNewState(itemType, item, option) {
        const newState = {
            openedDropdown: {
                calendar: false,
                price: false,
                number: false,
            },
            selectType: null,
        };
        if (option) {
            newState.openedDropdown[itemType[item]] = true;
            newState.selectType = item;
        }

        return newState;
    }
    getDateFormat(date) {
        return `${date.getFullYear()}-${(date.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
    }
}
