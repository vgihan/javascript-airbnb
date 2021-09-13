import { Component } from "../core/component";

export class Number extends Component {
    template() {
        const { number } = this.$props;
        const template = document.querySelector("#template_number").innerHTML;
        const templateVariable = {
            numOfAdult: number?.numOfAdult,
            numOfChild: number?.numOfChild,
            numOfBaby: number?.numOfBaby,
        };
        return Object.keys(templateVariable).reduce((pre, type) => {
            const value =
                templateVariable[type] === undefined
                    ? 0
                    : templateVariable[type];
            pre = pre.replace(`{{${type}}}`, value);
            return pre;
        }, template);
    }
}
