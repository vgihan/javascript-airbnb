import { Component } from "../../core/component";
import submit from "../../../img/search_button.png";

export class ResultHeader extends Component {
    setup() {}
    template() {
        const peopleSum =
            this.props.numOfAdult +
            this.props.numOfChild +
            this.props.numOfBaby;
        const { checkin, checkout } = this.props;
        return `<div class="logo">LOGO</div>
        <div class="search_bar">
            <div class="search_bar_item date">
                <p>${this.toMonthDate(checkin)}</p>
                <p> - </p>
                <p>${this.toMonthDate(checkout)}</p>
            </div>
            <div class="search_bar_item price">
                <p>\\${this.props.minPrice}</p>
                <p> ~ </p>
                <p>\\${this.props.maxPrice}</p>
            </div>
            <div class="search_bar_item number">
                <p>게스트 ${peopleSum}명</p>
            </div>
            <div class="search_bar_item submit">
                <div class="submit_btn">
                    <img />
                </div>
            </div>
        </div>
        <div class="login_btn"></div>`;
    }
    addImage() {
        this.$target.querySelector(".submit_btn > img").src = submit;
    }
    toMonthDate(date) {
        return ` ${date.getMonth() + 1}월 ${date.getDate()}일 `;
    }
}
