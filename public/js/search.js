import { SearchItemView } from './search_item.js';

export class SearchView {
    constructor(items, event) {
        this.event = event;
        this.items = items.reduce((pre, v) => {
            pre.push(new SearchItemView(v.className, v.title, v.placeholder, event));
            return pre;
        }, []);
    }
    render() {
        const items = this.items.reduce((pre, element) => {
            pre += element.render();
            return pre;
        }, '');
        const html = `<div class="search_bar">
            ${items}
            <div class="search_bar_item submit">
                <div class="submit_btn"></div>
            </div>
        </div>`;
        return html;
    }
}