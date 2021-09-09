import { SearchItemView } from './search_item.js';

export class SearchView {
    constructor(viewInfos, event) {
        this.event = event;
        this.viewInfos = viewInfos.reduce((pre, viewInfo) => {
            pre.push(new SearchItemView(viewInfo.className, viewInfo.title, viewInfo.placeholder, event));
            return pre;
        }, []);
    }
    render() {
        const items = this.viewInfos.reduce((pre, element) => {
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