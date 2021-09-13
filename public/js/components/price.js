import { Component } from "../core/component";

export class Price extends Component {
    render() {
        return `<div class="price_box">
            <div class="price_title">
                <p>가격 범위</p>
            </div>
            <input type="text" id="price_min">
            <input type="text" id="price_max">
        </div>`;
    }
}
