const searchBar = document.querySelector('.search_bar');
const searchItems = ['checkin', 'checkout', 'price', 'number'];
const dropdownOfItem = {
    'checkin': 'date',
    'checkout': 'date',
    'price': 'price',
    'number': 'number',
}

export function searchItemClickHandler(ev) {
    onCheckedItem(ev);
    offAllCheckedItem();
    const targetItem = searchItems.reduce((pre, v) => {
        if(ev.currentTarget === searchBar.querySelector(`.${v}`)) {
            pre = v;
        }
        return pre;
    }, '');
    if(isOpenedDropdown(targetItem)) return;
    onDropdown(targetItem);
}
function isOpenedDropdown(targetItem) {
    return !document.querySelector(`.search_dropdown.${dropdownOfItem[targetItem]}`).classList.contains('hidden');
}
function onCheckedItem(ev) {
    searchBar.querySelectorAll('.search_bar_item').forEach(element => {
        element.classList.remove('checked_item');
    });
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