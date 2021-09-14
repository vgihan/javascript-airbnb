import { Component } from "../../core/component";

export class ItemBox extends Component {
    template() {
        const { numOfAdult, numOfChild, numOfBaby } = this.$props;
        const peopleSum = numOfAdult + numOfChild + numOfBaby;
        return `<div class="items_description">
            <p class="desc_num"></p>
            <p class="desc_checkin">${this.toMonthDate(
                this.$props.checkin
            )}-</p>
            <p class="desc_checkout">${this.toMonthDate(
                this.$props.checkout
            )}-</p>
            <p class="desc_min">${this.$props.minPrice}~</p>
            <p class="desc_max">${this.$props.maxPrice}-</p>
            <p class="desc_num_people">게스트 ${peopleSum}명</p>
        </div>
        <div class="title">지도에서 선택한 지역의 숙소</div>
        <div class="items">
            
        </div>`;
    }
    toMonthDate(date) {
        console.log(date);
        return `${date.getMonth() + 1}월 ${date.getDate()}일`;
    }
}
