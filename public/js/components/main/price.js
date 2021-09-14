import { Component } from "../../core/component";

export class Price extends Component {
    template() {
        return `<div class="price_box">
            <div class="price_title">
                <p>가격 범위</p>
            </div>
            <input type="number" id="price_min" placeholder="최소" required>
            <input type="number" id="price_max" placeholder="최대" required>
            <input type="button" id="regist_price" value="등록">
        </div>`;
    }
    setEvent() {
        this.addEvent("click", "#regist_price", this.registPrice());
    }
    registPrice() {
        return () => {
            const { setSearchInput } = this.$props;
            const min = this.$target.querySelector("#price_min").value;
            const max = this.$target.querySelector("#price_max").value;
            if (!this.validation(min, max)) return;
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
        };
    }
    validation(min, max) {
        console.log(min, max);
        if (min === "" || max === "") {
            alert("최소금액과 최대금액을 모두 입력하세요 !");
            return false;
        }
        return true;
    }
}
