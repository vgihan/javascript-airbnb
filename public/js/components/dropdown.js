import { Component } from "../core/component";
import { Calendar } from "./calendar";
import { Price } from "./price";
import { Number } from "./number";

export class Dropdown extends Component {
    template() {
        const checkOpen = this.$props.openedDropdown;
        const calendarOption = checkOpen.calendar ? "" : "hidden";
        const priceOption = checkOpen.price ? "" : "hidden";
        const numberOption = checkOpen.number ? "" : "hidden";

        return `<div class="dropdown_item calendar ${calendarOption}"></div>
            <div class="dropdown_item price ${priceOption}"></div>
            <div class="dropdown_item number ${numberOption}"></div>`;
    }
    mounted() {
        const $dropdownCal = document.querySelector(".dropdown_item.calendar");
        const $dropdownPrice = document.querySelector(".dropdown_item.price");
        const $dropdownNumber = document.querySelector(".dropdown_item.number");

        const {
            openedDropdown,
            checkin,
            checkout,
            leftDate,
            rightDate,
            selectType,
        } = this.$props;

        new Calendar($dropdownCal, {
            openedDropdown,
            checkin,
            checkout,
            leftDate,
            rightDate,
            selectType,
            setSearchInput: this.$props.setSearchInput,
        });
        new Price($dropdownPrice, {
            setSearchInput: this.$props.setSearchInput,
        });
        new Number($dropdownNumber, {
            setSearchInput: this.$props.setSearchInput,
        });
    }
}
