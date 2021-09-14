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
            price: null,
            number: null,
            leftDate: leftDate,
            rightDate: rightDate,
            selectType: null,
        };
    }
    template() {
        return `<div class="search_bar"></div>
            <div class="search_dropdown"></div>`;
    }
    setSearchInput() {
        return (newState) => {
            const tempState = Object.keys(this.$state).reduce((pre, type) => {
                pre[type] = this.$state[type];
                return pre;
            }, {});
            Object.keys(this.$state).forEach((type) => {
                if (newState[type] !== undefined) {
                    tempState[type] = newState[type];
                }
            });
            this.setState(tempState);
        };
    }
    mounted() {
        const $bar = document.querySelector(".search_bar");
        const $dropdown = document.querySelector(".search_dropdown");

        const { checkin, checkout, price, number, selectType } = this.$state;

        new Bar($bar, {
            checkin,
            checkout,
            price,
            number,
            selectType,
            setSearchInput: this.setSearchInput(),
        });
        new Dropdown($dropdown, {
            ...this.$state,
            setSearchInput: this.setSearchInput(),
        });
    }
}
