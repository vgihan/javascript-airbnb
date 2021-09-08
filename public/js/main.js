import Event from 'events';
import addImage from "./add_image.js";
import { SearchView } from './search.js';

class MainView {
  constructor() {
    this.event = new Event();
    this.createSearchView();
  }
  createSearchView() {
    const items = [
      {className: 'checkin', title: '체크인', placeholder: '날짜 입력'},
      {className: 'checkout', title: '체크아웃', placeholder: '날짜 입력'},
      {className: 'price', title: '요금', placeholder: '금액대 설정'},
      {className: 'number', title: '인원', placeholder: '게스트 추가'},
    ];
    this.searchView = new SearchView(items, this.event);
  }
}

const mainView = new MainView();
addImage();