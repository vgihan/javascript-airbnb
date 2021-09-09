export class DropdownCalendarView {
    constructor(event) {
        this.event = event;
        this.leftDate = new Date();
        this.rightDate = new Date(this.leftDate.getFullYear(), this.leftDate.getMonth()+1);
        this.leftFocus = null;
        this.rightFocus = null;
        this.event.on('calendar_regist_handler', this.registEventHandler.bind(this));
    }
    setState(newState) {
        if(newState.leftDate) this.leftDate = newState.leftDate;
        if(newState.rightDate) this.rightDate = newState.rightDate;
        this.event.emit('re_render');
    }
    render() {
        const leftDateArr = this.createDateArr(this.leftDate);
        const leftDateListTag = this.createDateListTag(leftDateArr, this.leftDate);
        const rightDateArr = this.createDateArr(this.rightDate);
        const rightDateListTag = this.createDateListTag(rightDateArr, this.leftDate);
        const html = 
        `<div class="dropdown_item calendar">
            <div class="cal_box left">
                <div class="text_line">
                    <div class="left_btn"><</div>
                    <div class="date_info">
                        <p>${this.leftDate.getFullYear()}년 ${this.leftDate.getMonth()+1}월</p>
                    </div>
                </div>
                <ul class="week_line">
                    <li>일</li>
                    <li>월</li>
                    <li>화</li>
                    <li>수</li>
                    <li>목</li>
                    <li>금</li>
                    <li>토</li>
                </ul>
                <div class="cal_date">${leftDateListTag}</div>
            </div>
            <div class="cal_box right">
                <div class="text_line">
                    <div class="date_info">
                        <p>${this.rightDate.getFullYear()}년 ${this.rightDate.getMonth()+1}월</p>
                    </div>
                    <div class="right_btn">></div>
                </div>
                <ul class="week_line">
                    <li>일</li>
                    <li>월</li>
                    <li>화</li>
                    <li>수</li>
                    <li>목</li>
                    <li>금</li>
                    <li>토</li>
                </ul>
                <div class="cal_date">${rightDateListTag}</div>
            </div>
        </div>`;
        return html;
    }
    createDateArr(date) {
        const firstDay = this.transferDate(date, 1).getDay();
        const numOfDate = this.transferDate(date, 0, {month: 1}).getDate();
        const numOfWeek = parseInt((this.transferDate(date, 1).getDay() + numOfDate)/7 + 1);
        const initArray = Array.from({length: numOfWeek}).reduce((pre, v) => {
            pre.push([]);
            return pre;
        }, []);
        return Array.from({length: numOfWeek*7}).reduce((pre, v, i) => {
            const curDate = i>firstDay-1 && i-firstDay<numOfDate ? i-firstDay+1 : 0;
            pre[Math.floor(i/7)].push(curDate);
            return pre;
        }, initArray);
    }
    createDateListTag(dateArr, date) {
        return dateArr.reduce((week, outer) => {
            week += `<ul>`;
            week += outer.reduce((day, inner) => {
                if(inner !== 0) {
                    day += createLiTag.bind(this)(this.leftFocus, this.rightFocus, this.transferDate(date, inner, {month: 1}));
                    day += (inner > 0 ? inner : '') + '</li>';
                } else {
                    day += `<li></li>`;
                }
                return day;
            }, '');
            week += `</ul>`;
            return week;
        }, '');
        function createLiTag(leftFocus, rightFocus, date) {
            if(leftFocus === date || rightFocus === date) {
                return `<li class="${this.toDateFormatString(date)} focus">`;
            } else if(leftFocus < date && date < rightFocus) {
                return `<li class="${this.toDateFormatString(date)} inner">`;
            } else {
                return `<li class="${this.toDateFormatString(date)}">`;
            }
        }
    }
    transferDate(dateObj, date, option = {month:0}) {
        return new Date(dateObj.getFullYear(), dateObj.getMonth()+option['month'], date);
    }
    toDateFormatString(date) {
        return `${date.getFullYear()}-${date.getMonth().toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    }
    registEventHandler() {
        document.querySelector('.text_line > .right_btn').addEventListener('click', () => this.slideCalendar.bind(this)(1));
        document.querySelector('.text_line > .left_btn').addEventListener('click', () => this.slideCalendar.bind(this)(-1));
    }
    slideCalendar(direction) {
        this.setState({
            leftDate: new Date(this.leftDate.getFullYear(), this.leftDate.getMonth()+direction),
            rightDate: new Date(this.rightDate.getFullYear(), this.rightDate.getMonth()+direction)
        });
    }
}

export class DropdownPriceView {
    constructor(event) {
        this.event = event;
    }
    render() {
        return ``;
    }
}

export class DropdownNumberView {
    constructor(event) {
        this.event = event;
    }
    render() {
        return ``;
    }
}