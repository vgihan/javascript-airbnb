import { Component } from "../core/component";

export class Price extends Component {
    template() {
        return `<div class="price_box">
            <div class="price_title">
                <p>가격 범위</p>
            </div>
            <input type="text" id="price_min" placeholder="최소">
            <input type="text" id="price_max" placeholder="최대">
        </div>`;
    }
}
