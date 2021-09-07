import addImage from "./add_image.js";
import {searchItemClickHandler} from "./search_bar.js";

document.querySelectorAll('.search_bar_item').forEach(element => {
  element.addEventListener('click', searchItemClickHandler);
});
addImage();