import routie from 'libs/routie.js';
import {PostService} from '../services/post.service.js';
import {PostListComponent} from '../components/post-list.component.js';

let $page = document.getElementById('page');

routie('', controller);

export function controller() {
  PostListComponent.render({posts:[]}, $page)
}
