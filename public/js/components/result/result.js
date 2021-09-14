import { Component } from "../../core/component";

export class Result extends Component {
    setup() {
        console.log(this.$props);
    }
    template() {
        return `<div class="result_box">
            <header></header>
            <div class="item_box"></div>
            <div class="map_box"></div>
            <div class="modal_box"></div>
        </div>`;
    }
}
