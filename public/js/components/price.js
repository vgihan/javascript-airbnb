import { Component } from "../core/component";

export class Price extends Component {
    template() {
        return `<div class="price_box">
            <div class="price_title">
                <p>가격 범위</p>
            </div>
            <input type="text" id="price_min" placeholder="최소" required>
            <input type="text" id="price_max" placeholder="최대" required>
            <input type="button" id="regist_price" value="등록">
        </div>`;
    }
    setEvent() {
        this.$target
            .querySelector("#regist_price")
            .addEventListener("click", this.registPrice.bind(this));
    }
    registPrice() {
        const { setSearchInput } = this.$props;
        const min = this.$target.querySelector("#price_min").value;
        const max = this.$target.querySelector("#price_max").value;
        setSearchInput({
            price: {
                min: min,
                max: max,
            },
            openedDropdown: {
                calendar: false,
                price: false,
                number: false,
            },
        });
    }
}
