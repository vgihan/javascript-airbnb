import { DropdownCalendarView, DropdownNumberView, DropdownPriceView } from "./dropdown_item";

export class DropdownView {
    constructor(event) {
        this.event = event;
        this.render();
        this.items = {
            calendar: new DropdownCalendarView(event),
            price: new DropdownPriceView(event),
            number: new DropdownNumberView(event),
        }
    }
    render() {
        const html = `<div class="search_dropdown"></div>`;
        document.querySelector('.content_wrap').insertAdjacentHTML('beforeend', html);
    }
}