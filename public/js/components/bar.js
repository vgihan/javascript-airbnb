import { Component } from "../core/component.js";

const CHECKED = false;
const UNCHECKED = true;

export class Bar extends Component {
    template() {
        const searchItemTemplate = document.querySelector(
            "#template_search_item"
        ).innerHTML;
        const items = ["checkin", "checkout", "price", "number"];
        const template = items.reduce((pre, item) => {
            const placeholder = this.getPlaceholder(item);
            const checkClass =
                this.$props.selectType === item ? "checked_item" : "";
            const title = this.getTitle(item);
            pre += searchItemTemplate
                .replace("{{className}}", item)
                .replace("{{checkClass}}", checkClass)
                .replace("{{title}}", title)
                .replace("{{placeholder}}", placeholder);
            return pre;
        }, "");
        return `${template}
        <div class="search_bar_item submit">
            <div class="submit_btn"></div>
        </div>`;
    }
    getPlaceholder(type) {
        const { checkin, checkout, price, number } = this.$props;
        const placeholderObj = {
            checkin:
                checkin === null ? "날짜 입력" : this.getDateFormat(checkin),
            checkout:
                checkout === null ? "날짜 입력" : this.getDateFormat(checkout),
            price:
                price === null ? "금액대 입력" : `${price.min} ~ ${price.max}`,
            number:
                number === null
                    ? "게스트 추가"
                    : `게스트 ${
                          number.numOfAdult +
                          number.numOfChild +
                          number.numOfBaby
                      }`,
        };
        return placeholderObj[type];
    }
    getTitle(type) {
        const titleObj = {
            checkin: "체크인",
            checkout: "체크아웃",
            price: "요금",
            number: "인원",
        };
        return titleObj[type];
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
        return `${date.getMonth() + 1}월 ${date.getDate()}일`;
    }
}
