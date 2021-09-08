import { addCalendarImage } from "./add_image";

export class DropdownCalendarView {
    constructor(event) {
        this.event = event;
        this.leftDate = new Date();
        this.rightDate = new Date(this.leftDate.setMonth(this.leftDate.getMonth() + 1));
        this.parent = document.querySelector('.search_dropdown');
        this.target = '';
        this.registEventHandler();
    }
    registEventHandler() {
        this.event.on('check_item', this.openDropdownCalendar.bind(this));
        this.event.on('uncheck_item', this.closeDropdownCalendar.bind(this));
    }
    render() {
        const html = `<div class="dropdown_item calendar">
            <div class="cal_box left">
            <div class="text_line">
                <div class="left_btn"></div>
                <div class="date_info">
                    <p></p>
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
                    <p></p>
                </div>
                <div class="right_btn"></div>
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
        this.parent.innerHTML = html;
        addCalendarImage();
    }
    openDropdownCalendar(value) {
        if(value.className !== 'checkin' && value.className !== 'checkout') return;
        if(this.target !== '') return;
        this.target = value.className;
        this.render();
    }
    closeDropdownCalendar(value) {
        if(value.className !== 'checkin' && value.className !== 'checkout') return;
        this.parent.innerHTML = '';
        this.target = '';
    }
}

export class DropdownPriceView {
    constructor(event) {
        this.event = event;
    }
}

export class DropdownNumberView {
    constructor(event) {
        this.event = event;
    }
}