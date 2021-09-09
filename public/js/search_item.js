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
        const templateVariable = {
            className: this.className,
            checkClass: checkClass,
            title: this.title,
            placeholder: this.placeholder,
        }
        return Object.keys(templateVariable).reduce((pre, varKeys) => {
            pre = this.insertTemplateHtml(pre, varKeys, templateVariable[varKeys]);
            return pre;
        }, document.querySelector('#template_search_item').innerHTML);
    }
    insertTemplateHtml(template, varName, value) {
        return template.replace(`{{${varName}}}`, value);
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