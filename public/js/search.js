import { SearchItemView } from './search_item.js';

export class SearchView {
    constructor(items, event) {
        this.event = event;
        this.render();
        this.items = items.reduce((pre, v) => {
            pre.push(new SearchItemView(v.className, v.title, v.placeholder, event));
            return pre;
        }, []);
        const submitBtn = `<div class="search_bar_item submit">
            <div class="submit_btn"></div>
        </div>`;
        this.element = document.querySelector(`.search_bar`);
        this.element.insertAdjacentHTML('beforeend', submitBtn);
    }
    render() {
        const html = `<div class="search_bar"></div>`;
        document.querySelector('.content_wrap').insertAdjacentHTML('beforeend', html);
    }
}