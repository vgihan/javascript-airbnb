import { Component } from "../../core/component";
import tempImg from "../../../img/main_background.png";
import star from "../../../img/star.png";

export class ItemBox extends Component {
    async template() {
        const { numOfAdult, numOfChild, numOfBaby } = this.props;
        const peopleSum = numOfAdult + numOfChild + numOfBaby;
        const houseItems = await this.fetchHouseData();
        return `<div class="items_description">
            <p class="desc_num"></p>
            <p class="desc_checkin">${this.toMonthDate(this.props.checkin)}</p>
            <p class="hyphen">-</p>
            <p class="desc_checkout">${this.toMonthDate(
                this.props.checkout
            )}</p>
            <p class="hyphen">-</p>
            <p class="desc_min">\\${this.props.minPrice}~</p>
            <p class="desc_max">\\${this.props.maxPrice}</p>
            <p class="hyphen">-</p>
            <p class="desc_num_people">게스트 ${peopleSum}명</p>
        </div>
        <div class="title">지도에서 선택한 지역의 숙소</div>
        ${houseItems.reduce((pre, item) => {
            pre += '<div class="items">';
            pre += this.getItemTemplate(item);
            pre += "</div>";
            return pre;
        }, "")}
        `;
    }
    async render() {
        this.$target.innerHTML = await this.template();
        this.mounted();
        this.addImage();
    }
    addImage() {
        Array.from(this.$target.querySelectorAll(".image > img")).forEach(
            (element) => {
                element.src = tempImg;
            }
        );
        Array.from(this.$target.querySelectorAll(".evaluation > img")).forEach(
            (element) => {
                element.src = star;
            }
        );
    }
    getItemTemplate(info) {
        const itemTemplate = document.querySelector("#item_template").innerHTML;
        const term =
            (this.props.checkout - this.props.checkin) / (1000 * 60 * 60 * 24);
        info["allPrice"] = term * info["price"];

        return Object.keys(info).reduce((pre, infoKey) => {
            pre = pre.replace(`{{${infoKey}}}`, info[infoKey]);
            return pre;
        }, itemTemplate);
    }
    toMonthDate(date) {
        return `${date.getMonth() + 1}월 ${date.getDate()}일`;
    }
    async fetchHouseData() {
        const { minPrice, maxPrice, numOfAdult, numOfChild, numOfBaby } =
            this.props;
        const url = `/house?minPrice=${minPrice}&maxPrice=${maxPrice}&sumOfPeople=${
            numOfAdult + numOfChild + numOfBaby
        }`;
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return JSON.parse(await res.json());
    }
}
// "room_id":1125760,
// "host_id":6175346,
// "room_type":"Shared room",
// "city":"Seoul",
// "neighborhood":"Anam-dong 2(i)-ga",
// "reviews":16,
// "overall_satisfaction":5,
// "accommodates":4,
// "bedrooms":"1",
// "price":10,
// "last_modified":"08:46.8",
// "latitude":37.586486,
// "longitude":127.021223,
// "location":"0101000020E610000013BBB6B75BC15F40EBC726F911CB4240"
