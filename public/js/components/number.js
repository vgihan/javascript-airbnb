import { Component } from "../core/component";

export class Number extends Component {
    template() {
        const { numOfAdult, numOfChild, numOfBaby } = this.$props;
        const template = document.querySelector("#template_number").innerHTML;
        const templateVariable = {
            numOfAdult: numOfAdult,
            numOfChild: numOfChild,
            numOfBaby: numOfBaby,
        };
        return Object.keys(templateVariable).reduce((pre, type) => {
            pre = pre.replace(`{{${type}}}`, templateVariable[type]);
            return pre;
        }, template);
    }
}
