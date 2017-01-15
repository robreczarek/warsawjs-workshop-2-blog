import routie from 'libs/routie.js';
import {AboutComponent} from '../components/about.component.js';

//let $page = document.getElementById('page');
let $page = document.getElementById('page');

routie('about', controller);

export function controller() {
  AboutComponent.render({}, $page)
}
