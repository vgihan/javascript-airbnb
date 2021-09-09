import Event from 'events';
import { addImage } from "./add_image.js";
import { SearchView } from './search.js';
import { DropdownView } from './dropdown.js';

class MainView {
  constructor() {
    this.event = new Event();
    this.createView();
    this.render();
    this.registEventHandler();
  }
  render() {
    const header = `<header>
      <div class="header_background"></div>
      <div class="logo"></div>
      <div class="header_menu">
        <div class="header_menu_item room">
          <p>숙소</p>
        </div>
        <div class="header_menu_item experience">
          <p>체험</p>
        </div>
        <div class="header_menu_item online">
          <p>온라인 체험</p>
        </div>
      </div>
      <div class="login_btn"></div>
    </header>`;
    const search = this.searchView.render();
    const dropdown = this.dropdownView.render();
    document.querySelector('.content_wrap').innerHTML = header + search + dropdown;
    addImage();
    this.event.emit('regist_handler');
  }
  registEventHandler() {
    this.event.on('re_render', this.render.bind(this));
  }
  createView() {
    const items = [
      {className: 'checkin', title: '체크인', placeholder: '날짜 입력'},
      {className: 'checkout', title: '체크아웃', placeholder: '날짜 입력'},
      {className: 'price', title: '요금', placeholder: '금액대 설정'},
      {className: 'number', title: '인원', placeholder: '게스트 추가'},
    ];
    this.searchView = new SearchView(items, this.event);
    this.dropdownView = new DropdownView(this.event);
  }
}
const mainView = new MainView();