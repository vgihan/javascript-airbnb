import { Component } from "../core/component";

export class Calendar extends Component {
    setup() {
        this.$state = {
            checkin: null,
            checkout: null,
            leftDate: new Date(),
            rightDate: new Date(
                this.leftDate.getFullYear(),
                this.leftDate.getMonth() + 1
            ),
            selectType: null,
        };
    }
    setEvent() {
        this.addEvent("click", ".cal_date > ul", (ev) => {
            if (ev.target.classList.contains("left_btn")) {
                this.slideCalendar.bind(this)(-1);
                return;
            }
            if (ev.target.classList.contains("right_btn")) {
                this.slideCalendar.bind(this)(1);
                return;
            }
            if (ev.target.nodeName === "LI") {
                this.focusingDate.bind(this)(ev);
                return;
            }
        });
    }
    template() {
        const { checkin, checkout, leftDate, rightDate } = this.$state;
        const leftDateArr = this.createDateArr(leftDate);
        const leftDateListTag = this.createDateListTag(
            leftDateArr,
            leftDate,
            checkin,
            checkout
        );
        const rightDateArr = this.createDateArr(rightDate);
        const rightDateListTag = this.createDateListTag(
            rightDateArr,
            rightDate,
            checkin,
            checkout
        );
        const templateVariable = {
            leftYear: leftDate.getFullYear(),
            leftMonth: leftDate.getMonth() + 1,
            rightYear: rightDate.getFullYear(),
            rightMonth: rightDate.getMonth() + 1,
            leftDateListTag: leftDateListTag,
            rightDateListTag: rightDateListTag,
        };
        const calendarTemplate =
            document.querySelector("#template_calendar").innerHTML;

        return Object.keys(templateVariable).reduce((pre, varsKey) => {
            pre = this.insertTemplateHtml(
                pre,
                varsKey,
                templateVariable[varsKey]
            );
            return pre;
        }, calendarTemplate);
    }
    insertTemplateHtml(template, varName, value) {
        return template.replace(`{{${varName}}}`, value);
    }
    createDateArr(date) {
        const firstDay = this.transferDate(date, 1).getDay();
        const numOfDate = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDate();
        const numOfWeek = parseInt(
            (this.transferDate(date, 1).getDay() + numOfDate) / 7 + 1
        );
        const initArray = Array.from({ length: numOfWeek }).reduce((pre) => {
            pre.push([]);
            return pre;
        }, []);
        return Array.from({ length: numOfWeek * 7 }).reduce((pre, v, i) => {
            const curDate =
                i > firstDay - 1 && i - firstDay < numOfDate
                    ? i - firstDay + 1
                    : 0;
            pre[Math.floor(i / 7)].push(curDate);
            return pre;
        }, initArray);
    }
    createDateListTag(dateArr, date, checkin, checkout) {
        return dateArr.reduce((pre, week) => {
            pre += `<ul>`;
            pre += createInnerTag.bind(this)(week, date, checkin, checkout);
            pre += `</ul>`;
            return pre;
        }, "");
        function createInnerTag(week, date, checkin, checkout) {
            return week.reduce((pre, day) => {
                if (day !== 0) {
                    pre += createLiTag.bind(this)(
                        checkin,
                        checkout,
                        this.transferDate(date, day)
                    );
                    pre += (day > 0 ? day : "") + "</li>";
                } else {
                    pre += `<li class="empty"></li>`;
                }
                return pre;
            }, "");
        }
        function createLiTag(checkin, checkout, date) {
            const dateData = this.toDateFormatString(date);
            const classes = [];
            if (
                this.isEqualDate(checkin, date) ||
                this.isEqualDate(checkout, date)
            ) {
                classes.push("focus");
            } else if (checkin < date && date < checkout) {
                classes.push("inner");
            }
            if (date < new Date()) {
                classes.push("inactive");
            }
            return `<li class="${classes.join(" ")}" data-date="${dateData}">`;
        }
    }
    isEqualDate(dateA, dateB) {
        if (!dateA) return false;
        if (!dateB) return false;
        return (
            this.toDateFormatString(dateA) === this.toDateFormatString(dateB)
        );
    }
    transferDate(dateObj, date) {
        return new Date(dateObj.getFullYear(), dateObj.getMonth(), date);
    }
    toDateFormatString(date) {
        return `${date.getFullYear()}-${(date.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
    }
    slideCalendar(direction) {
        const { leftDate, rightDate } = this.$state;
        const newState = Object.keys(this.$state).reduce((pre, state) => {
            return pre;
        }, newState);
        newState["leftDate"] = new Date(
            leftDate.getFullYear(),
            leftDate.getMonth() + direction
        );
        newState["rightDate"] = new Date(
            rightDate.getFullYear(),
            rightDate.getMonth() + direction
        );
        this.setState(newState);
    }
    focusingDate(ev) {
        const { selectType } = this.$state;
        const newState = Object.keys(this.$state).reduce((pre, state) => {
            return pre;
        }, newState);
        if (selectType === "checkin") {
            newState["checkin"] = new Date(ev.target["data-date"]);
        } else {
            newState["checkout"] = new Date(ev.target["data-date"]);
        }
        this.setState(newState);
    }
}
