import { DropdownCalendarView, DropdownNumberView, DropdownPriceView } from "./dropdown_item";

export class DropdownView {
    constructor(event) {
        this.event = event;
        this.openedDropdown = '';
        this.items = {
            calendar: new DropdownCalendarView(event),
            price: new DropdownPriceView(event),
            number: new DropdownNumberView(event),
        }
        this.registEventHandler();
    }
    setState(newState) {
        if(newState.openedDropdown === this.openedDropdown) return;
        if(newState.openedDropdown !== undefined) this.openedDropdown = newState.openedDropdown;
        this.event.emit('re_render');
    }
    registEventHandler() {
        this.event.on('check_item', this.openDropdown.bind(this));
        this.event.on('uncheck_item', this.closeDropdown.bind(this));
    }
    render() {
        const item = this.openedDropdown === '' ? '' : this.items[this.openedDropdown].render();
        const html = `<div class="search_dropdown">${item}</div>`;
        return {content: html, option: this.openedDropdown};
    }
    openDropdown(value) {
        const matchObj = {
            checkin: 'calendar',
            checkout: 'calendar',
            price: 'price',
            number: 'number',
        }
        if(matchObj[value.className] === 'calendar') {
            this.items.calendar.setState({type: value.className});
        }
        this.setState({openedDropdown: matchObj[value.className]});
        this.event.emit(`${matchObj[value.className]}_regist_handler`);
    }
    closeDropdown() {
        this.setState({openedDropdown: ''});
    }
}