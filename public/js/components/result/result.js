import { Component } from "../../core/component";
import { ItemBox } from "./item_box";
import { ResultHeader } from "./result_header";

export class Result extends Component {
    template() {
        return `<div class="result_box">
            <header></header>
            <div class="content">
                <div class="item_box"></div>
                <div class="map_box"></div>
            </div>
            <div class="modal_box"></div>
        </div>`;
    }
    mounted() {
        const $itembox = this.$target.querySelector(".item_box");
        const $header = this.$target.querySelector("header");
        const $modal = this.$target.querySelector(".modal_box");
        const $map = this.$target.querySelector(".map_box");

        new ItemBox($itembox, this.props);
        new ResultHeader($header, this.props);
    }
}
