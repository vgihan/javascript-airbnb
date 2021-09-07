export function searchItemClickHandler(ev) {
    showShadowEffect(ev);
    showCalendarDropdown();
}

function showShadowEffect(ev) {
    document.querySelectorAll('.search_bar_item').forEach(element => {
        element.classList.remove('checked_item');
    });
    ev.currentTarget.classList.add('checked_item');
}
function showCalendarDropdown() {
    document.querySelector('.search_dropdown.date').classList.remove('hidden');
}