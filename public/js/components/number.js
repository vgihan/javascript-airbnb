import { Component } from "../core/component";

export class Number extends Component {
    template() {
        const { number } = this.$props;
        const template = document.querySelector("#template_number").innerHTML;
        const isActive = (target) => {
            return target === 0 || target === undefined;
        };
        const templateVariable = {
            numOfAdult: number?.numOfAdult,
            numOfChild: number?.numOfChild,
            numOfBaby: number?.numOfBaby,
            adultActiveOption: isActive(number?.numOfAdult) ? "inactive" : "",
            childActiveOption: isActive(number?.numOfChild) ? "inactive" : "",
            babyActiveOption: isActive(number?.numOfBaby) ? "inactive" : "",
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
    setEvent() {
        this.addEvent(
            "click",
            ".number_box",
            this.changeNumOfPerson.bind(this)
        );
    }
    changeNumOfPerson(ev) {
        const { number, setSearchInput } = this.$props;
        const plusBtn = ev.target.closest(".change_btn.plus");
        const minusBtn = ev.target.closest(".change_btn.minus");
        const newNumber = {
            numOfAdult:
                number?.numOfAdult === undefined ? 0 : number?.numOfAdult,
            numOfChild:
                number?.numOfChild === undefined ? 0 : number?.numOfChild,
            numOfBaby: number?.numOfBaby === undefined ? 0 : number?.numOfBaby,
        };
        const typeObj = {
            adult: "numOfAdult",
            child: "numOfChild",
            baby: "numOfBaby",
        };
        if (!plusBtn && !minusBtn) return;
        if (plusBtn) {
            const type = plusBtn.parentNode.parentNode.classList[1];
            newNumber[typeObj[type]] += 1;
        } else {
            if (minusBtn.classList.contains("inactive")) return;
            const type = minusBtn.parentNode.parentNode.classList[1];
            newNumber[typeObj[type]] -= 1;
        }

        setSearchInput({
            number: newNumber,
        });
    }
}
