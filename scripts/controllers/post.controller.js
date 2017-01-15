import routie from 'libs/routie.js';
import {PostComponent} from '../components/post.component.js';

//let $page = document.getElementById('page');
let $page = document.getElementById('page');

routie('post/:id', controller);

export function controller(id) {
  PostComponent.render({ id:id }, $page)
}
