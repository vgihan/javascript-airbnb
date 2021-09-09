export class DropdownCalendarView {
    constructor(event) {
        this.event = event;
        this.leftDate = new Date();
        this.rightDate = new Date(this.leftDate.getFullYear(), this.leftDate.getMonth()+1);
        this.checkin = null;
        this.checkout = null;
        this.selectType = null;
        this.event.on('calendar_regist_handler', this.registEventHandler.bind(this));
    }
    setState(newState) {
        if(newState.leftDate !== undefined) this.leftDate = newState.leftDate;
        if(newState.rightDate !== undefined) this.rightDate = newState.rightDate;
        if(newState.checkin !== undefined) this.checkin = newState.checkin;
        if(newState.checkout !== undefined) this.checkout = newState.checkout;
        if(newState.type !== undefined) this.selectType = newState.type;
        this.event.emit('re_render');
    }
    render() {
        const leftDateArr = this.createDateArr(this.leftDate);
        const leftDateListTag = this.createDateListTag(leftDateArr, this.leftDate);
        const rightDateArr = this.createDateArr(this.rightDate);
        const rightDateListTag = this.createDateListTag(rightDateArr, this.rightDate);
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
        const numOfDate = this.transferDate(date, 0).getDate();
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
                    day += createLiTag.bind(this)(this.checkin, this.checkout, this.transferDate(date, inner));
                    day += (inner > 0 ? inner : '') + '</li>';
                } else {
                    day += `<li class="empty"></li>`;
                }
                return day;
            }, '');
            week += `</ul>`;
            return week;
        }, '');
        function createLiTag(checkin, checkout, date) {
            const classes = [this.toDateFormatString(date)];
            if(this.isEqualDate(checkin, date) || this.isEqualDate(checkout, date)) {
                classes.push('focus');
            } else if(checkin < date && date < checkout) {
                classes.push('inner');
            }
            if(date < new Date()) {
                classes.push('inactive');
            }
            return `<li class="${classes.join(' ')}">`;
        }
    }
    isEqualDate(dateA, dateB) {
        if(!dateA) return false;
        if(!dateB) return false;
        return this.toDateFormatString(dateA) === this.toDateFormatString(dateB);
    }
    transferDate(dateObj, date) {
        return new Date(dateObj.getFullYear(), dateObj.getMonth(), date);
    }
    toDateFormatString(date) {
        return `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    }
    registEventHandler() {
        document.querySelector('.text_line > .right_btn').addEventListener('click', () => this.slideCalendar.bind(this)(1));
        document.querySelector('.text_line > .left_btn').addEventListener('click', () => this.slideCalendar.bind(this)(-1));
        document.querySelectorAll('.cal_date > ul > li:not(.empty):not(.inactive)').forEach(element => {
            element.addEventListener('click', this.focusingDate.bind(this));
        });
    }
    slideCalendar(direction) {
        this.setState({
            leftDate: new Date(this.leftDate.getFullYear(), this.leftDate.getMonth()+direction),
            rightDate: new Date(this.rightDate.getFullYear(), this.rightDate.getMonth()+direction)
        });
    }
    focusingDate(ev) {
        if(this.selectType === 'checkin') {
            this.setState({checkin: new Date(ev.currentTarget.classList[0])});
        } else {
            this.setState({checkout: new Date(ev.currentTarget.classList[0])});
        }
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