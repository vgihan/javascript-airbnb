export class DropdownCalendarView {
    constructor(event) {
        this.event = event;
        this.leftDate = new Date();
        this.rightDate = new Date(this.leftDate.setMonth(this.leftDate.getMonth() + 1));
    }
    setState(newState) {
        if(newState.leftDate) this.leftDate = newState.leftDate;
        if(newState.rightDate) this.rightDate = newState.rightDate;
        this.event.emit('re_render')
    }
    render() {
        const html = `<div class="dropdown_item calendar">
            <div class="cal_box left">
            <div class="text_line">
                <div class="left_btn"><</div>
                <div class="date_info">
                    <p>${this.leftDate.getFullYear()}년 ${this.leftDate.getMonth()}월 ${this.leftDate.getDate()}일</p>
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
            <div class="cal_date"></div>
            </div>
            <div class="cal_box right">
            <div class="text_line">
                <div class="date_info">
                    <p>${this.rightDate.getFullYear()}년 ${this.rightDate.getMonth()}월 ${this.rightDate.getDate()}일</p>
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
            <div class="cal_date"></div>
            </div>
        </div>`;
        return html;
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