const searchBar = document.querySelector('.search_bar');
const searchItems = ['checkin', 'checkout', 'price', 'number'];
const dropdownOfItem = {
    'checkin': 'date',
    'checkout': 'date',
    'price': 'price',
    'number': 'number',
}

export function searchItemClickHandler(ev) {
    const targetItem = searchItems.reduce((pre, v) => {
        if(ev.currentTarget === searchBar.querySelector(`.${v}`)) {
            pre = v;
        }
        return pre;
    }, '');
    if(isCheckedItem(targetItem)) {
        offAllCheckedItem();
        offAllDropdown();
        return;
    }
    offAllCheckedItem();
    onCheckedItem(ev);
    onDropdown(targetItem);
}
function isCheckedItem(targetItem) {
    return document.querySelector(`.search_bar_item.${targetItem}`).classList.contains('checked_item');
}
function onCheckedItem(ev) {
    ev.currentTarget.classList.add('checked_item');
}
function offAllCheckedItem() {
    searchBar.querySelectorAll('.search_bar_item').forEach(element => {
        element.classList.remove('checked_item');
    });
}
function onDropdown(targetClass) {
    offAllDropdown();
    document.querySelector(`.search_dropdown.${dropdownOfItem[targetClass]}`).classList.remove('hidden');
}
function offAllDropdown() {
    document.querySelectorAll('.search_dropdown').forEach(element => {
        element.classList.add('hidden');
    });
}