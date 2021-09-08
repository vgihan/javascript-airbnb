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
        this.element = document.querySelector(`.search_bar_item.${this.className}`);
        this.registEventHandler();
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
        this.element.addEventListener('click', this.toggleCheckItem.bind(this));
        this.event.on('check_item', (value) => {
            if(value.className !== this.className) {
                this.uncheckItem();
            }
        });
    }
    toggleCheckItem() {
        const checkFuns = [this.uncheckItem.bind(this), this.checkItem.bind(this)];
        const eventNames = ['uncheck_item', 'check_item'];
        this.event.emit(eventNames[this.isChecked], {className: this.className});
        checkFuns[this.isChecked]();
    }
    checkItem() {
        this.isChecked = CHECKED;
        this.element.classList.add('checked_item');
    }
    uncheckItem() {
        this.isChecked = UNCHECKED;
        this.element.classList.remove('checked_item');
    }
}