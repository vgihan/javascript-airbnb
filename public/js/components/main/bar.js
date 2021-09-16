import { Component } from "../../core/component.js";

const CHECKED = true;
const UNCHECKED = false;

export class Bar extends Component {
    template() {
        const placeholderObj = {
            checkin: "날짜 입력",
            checkout: "날짜 입력",
            price: "금액대 입력",
            number: "게스트 입력",
        };
        const items = ["checkin", "checkout", "price", "number"];
        const template = items.reduce((pre, item) => {
            pre += `<div class="search_bar_item ${item} ${this.getCheckString(
                item
            )}">
                <div class="item_title">
                    <p>${this.getTitle(item)}</p>
                </div>
                <div class="item_content">
                    <input type="text" id="input_${item}" value="${this.getTextInputValue(
                item
            )}" placeholder="${placeholderObj[item]}" readonly/>
                </div>
            </div>`;
            return pre;
        }, "");
        return `${template}
        <div class="search_bar_item submit">
            <div class="submit_btn"></div>
        </div>`;
    }
    getCheckString(type) {
        return this.props.selectType === type ? "checked_item" : "";
    }
    getTextInputValue(type) {
        const { checkin, checkout, price, number } = this.props;
        const textInputValueObj = {
            checkin: checkin === null ? "" : this.getDateFormat(checkin),
            checkout: checkout === null ? "" : this.getDateFormat(checkout),
            price: price === null ? "" : `${price.min} ~ ${price.max}`,
            number:
                number === null
                    ? ""
                    : `게스트 ${
                          number.numOfAdult +
                          number.numOfChild +
                          number.numOfBaby
                      }`,
        };
        return textInputValueObj[type];
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
        this.addEvent("click", ".search_bar", this.changeCheckState());
    }
    changeCheckState() {
        return (ev) => {
            if (ev.target.classList.contains(".search_bar")) return;
            const { setSearchInput } = this.props;
            const target = ev.target.closest(".search_bar_item");
            const itemType = {
                checkin: "calendar",
                checkout: "calendar",
                price: "price",
                number: "number",
            };
            Object.keys(itemType).forEach((item) => {
                const isBarItem = target.classList.contains(item);
                const isChecked = this.props.selectType === item;
                if (isBarItem && !isChecked) {
                    setSearchInput(
                        this.makeNewState(itemType, item, UNCHECKED)
                    );
                } else if (isBarItem && isChecked) {
                    setSearchInput(this.makeNewState(itemType, item, CHECKED));
                }
            });
        };
    }
    makeNewState = (itemType, item, option) => {
        const newState = {
            openedDropdown: {
                calendar: false,
                price: false,
                number: false,
            },
            selectType: null,
        };
        if (!option) {
            newState.openedDropdown[itemType[item]] = true;
            newState.selectType = item;
        }

        return newState;
    };
    getDateFormat(date) {
        return `${date.getMonth() + 1}월 ${date.getDate()}일`;
    }
}
