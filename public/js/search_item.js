const CHECKED = 0;
const UNCHECKED = 1;

export class SearchItemView {
    constructor(className, title, placeholder, event) {
        this.event = event;
        this.className = className;
        this.title = title;
        this.placeholder = placeholder;
        this.isChecked = UNCHECKED;
        this.event.on('regist_handler', this.registEventHandler.bind(this));
        this.event.on('check_item', (value) => {
            if(value.className !== this.className && this.isChecked === CHECKED) {
                this.setState({isChecked: UNCHECKED});
            }
        });
    }
    setState(newState) {
        if(newState.isChecked !== undefined) this.isChecked = newState.isChecked;
        this.event.emit('re_render');
    }
    render() {
        const checkClass = this.isChecked === CHECKED ? 'checked_item' : '';
        return `<div class="search_bar_item ${this.className} ${checkClass}">
            <div class="item_title">
                <p>${this.title}</p></div>
                <div class="item_content">
                <input type="text" class="value" required>
                <input type="text" class="wrap" value="${this.placeholder}" readonly>
            </div>
        </div>`;
    }
    registEventHandler() {
        document.querySelector(`.search_bar_item.${this.className}`).addEventListener('click', this.toggleCheckItem.bind(this));
    }
    toggleCheckItem() {
        const eventNames = ['uncheck_item', 'check_item'];
        this.event.emit(eventNames[this.isChecked], {className: this.className});
        this.setState({isChecked: (this.isChecked+1)%2});
    }
}