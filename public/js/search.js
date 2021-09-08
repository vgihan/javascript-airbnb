import { SearchItemView } from './search_item.js';

export class SearchView {
    constructor(items, event) {
        this.render();
        this.items = items.reduce((pre, v) => {
            pre.push(new SearchItemView(v.className, v.title, v.placeholder));
            return pre;
        }, []);
    }
    render() {
        const html = `<div class="search_bar">
            <div class="search_bar_item submit">
                <div class="submit_btn"></div>
            </div>
        </div>`;
        document.querySelector('.content_wrap').insertAdjacentHTML('beforeend', html);
    }
}