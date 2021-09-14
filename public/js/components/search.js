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
    setEvent() {
        this.addEvent("click", ".submit_btn", this.submitCondition());
    }
    validation(checkin, checkout, price, number) {
        if (!checkin || !checkout) {
            alert("체크인/체크아웃 날짜를 확인하세요");
            return false;
        }
        if (checkin > checkout) {
            alert("체크인 날짜가 체크아웃보다 늦을 수 없습니다");
            return false;
        }
        if (price === null || number === null) {
            alert("요금/인원을 확인하세요");
            return false;
        }
        return true;
    }
    submitCondition() {
        return () => {
            const { checkin, checkout, price, number } = this.$state;
            const { submit } = this.$props;
            if (!this.validation(checkin, checkout, price, number)) return;
            submit({
                page: "result",
                checkin: checkin,
                checkout: checkout,
                minPrice: price.min,
                maxPrice: price.max,
                numOfAdult: number.numOfAdult,
                numOfChild: number.numOfChild,
                numOfBaby: number.numOfBaby,
            });
        };
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
