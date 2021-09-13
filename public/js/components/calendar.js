import { Component } from "../core/component";

export class Calendar extends Component {
    setEvent() {
        this.addEvent("click", ".dropdown_item.calendar", (ev) => {
            console.log(ev.target);
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
        const { checkin, checkout, leftDate, rightDate } = this.$props;
        const { leftDateArr, rightDateArr } = {
            leftDateArr: this.createDateArr(leftDate),
            rightDateArr: this.createDateArr(rightDate),
        };
        const { leftDateListTag, rightDateListTag } = {
            leftDateListTag: this.createDateListTag(
                leftDateArr,
                leftDate,
                checkin,
                checkout
            ),
            rightDateListTag: this.createDateListTag(
                rightDateArr,
                rightDate,
                checkin,
                checkout
            ),
        };
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
        const firstDay = this.transferDate(date, 1).getDay() - 1;
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
                i > firstDay && i - firstDay < numOfDate ? i - firstDay : 0;
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
                    pre += checkDateOption.bind(this)(
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
        function checkDateOption(checkin, checkout, date) {
            const dateData = this.toDateFormatString(date);
            const isEqualDate =
                this.isEqualDate(checkin, date) ||
                this.isEqualDate(checkout, date);
            const classes = [];

            if (date < new Date()) {
                classes.push("inactive");
            }
            if (isEqualDate) {
                classes.push("focus");
            } else if (checkin < date && date < checkout) {
                classes.push("inner");
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
        const { leftDate, rightDate } = this.$props;
        const newState = Object.keys(this.$props).reduce((pre, state) => {
            return pre;
        }, newState);
        const { setSearchInput } = this.$props;
        setSearchInput({
            leftDate: new Date(
                leftDate.getFullYear(),
                leftDate.getMonth() + direction
            ),
            rightDate: new Date(
                rightDate.getFullYear(),
                rightDate.getMonth() + direction
            ),
        });
    }
    focusingDate(ev) {
        const { selectType } = this.$props;
        const { setSearchInput } = this.$props;
        if (selectType === "checkin") {
            setSearchInput({
                checkin: new Date(ev.target.getAttribute("data-date")),
            });
        } else {
            setSearchInput({
                checkout: new Date(ev.target.getAttribute("data-date")),
            });
        }
    }
}
