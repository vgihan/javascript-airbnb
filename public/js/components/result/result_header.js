import { Component } from "../../core/component";

export class ResultHeader extends Component {
    setup() {}
    template() {
        const peopleSum =
            this.$props.numOfAdult +
            this.$props.numOfChild +
            this.$props.numOfBaby;
        const { checkin, checkout } = this.$props;
        return `<div class="logo">LOGO</div>
        <div class="search_bar">
            <div class="search_bar_item date">
                <p>${this.toMonthDate(checkin)}</p>
                <p> - </p>
                <p>${this.toMonthDate(checkout)}</p>
            </div>
            <div class="search_bar_item price">
                <p>\\${this.$props.minPrice}</p>
                <p> ~ </p>
                <p>\\${this.$props.maxPrice}</p>
            </div>
            <div class="search_bar_item number">
                <p>게스트 ${peopleSum}명</p>
            </div>
            <div class="search_bar_item submit">
                <div class="submit_btn"></div>
            </div>
        </div>
        <div class="login_btn"></div>`;
    }
    toMonthDate(date) {
        return ` ${date.getMonth() + 1}월 ${date.getDate()}일 `;
    }
}
