import { Component } from "../core/component";
import { Bar } from "./bar";
import { Dropdown } from "./dropdown";

export class Search extends Component {
    setup() {
        const leftDate = new Date();
        const rightDate = new Date(
            leftDate.getFullYear(),
            leftDate.getMonth() + 1
        );
        this.$state = {
            openedDropdown: {
                calendar: false,
                price: false,
                number: false,
            },
            checkin: null,
            checkout: null,
            leftDate: leftDate,
            rightDate: rightDate,
            selectType: null,
        };
    }
    template() {
        return `<div class="search_box">
            <div class="search_bar"></div>
            <div class="search_dropdown"></div>
        </div>`;
    }
    mounted() {
        const $bar = document.querySelector(".search_bar");
        const $dropdown = document.querySelector(".search_dropdown");

        const { checkin, checkout } = this.$state;

        new Bar($bar, { checkin, checkout });
        new Dropdown($dropdown, {
            ...this.$state,
            setSearchInput: this.setSearchInput.bind(this),
        });
    }
    render() {
        this.$target.insertAdjacentHTML("afterbegin", this.template());
        this.mounted();
    }
    setSearchInput(data, type) {
        this.$state[type] = data;
    }
}
