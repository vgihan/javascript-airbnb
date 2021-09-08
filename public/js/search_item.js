const CHECKED = 0;
const UNCHECKED = 1;

export class SearchItemView {
    constructor(className, title, placeholder, event) {
        this.event = event;
        this.className = className
        this.title = title;
        this.placeholder = placeholder;
        this.isChecked = UNCHECKED;
        this.render();
        this.element = document.querySelector(`.search_bar.${this.className}`);
    }
    render() {
        const html = `<div class="search_bar_item ${this.className}">
            <div class="item_title">
                <p>${this.title}</p></div>
                <div class="item_content">
                <input type="text" class="value" required>
                <input type="text" class="wrap" value="${this.placeholder}" readonly>
            </div>
        </div>`;
        document.querySelector('.search_bar').insertAdjacentHTML('beforeend', html);
    }
    registEventHandler() {
        this.element.addEventListener('click', this.toggleCheckItem);
        this.event.on('check_item', (value) => {
            if(value.className === this.className) {
                this.checkItem();
            } else {
                this.uncheckItem();
            }
        });
    }
    checkItem() {
        this.isChecked = CHECKED;
        this.element.classList.add('checked_item');
    }
    uncheckItem() {
        this.isChecked = UNCHECKED;
        this.element.classList.remove('checked_item');
    }
    toggleCheckItem() {
        const checkFuns = [this.checkItem, this.uncheckItem];
        const eventNames = ['check_item', 'uncheck_item'];

        checkFuns[this.isChecked]();
        this.event(eventNames[this.isChecked], {className: this.className});
    }
}