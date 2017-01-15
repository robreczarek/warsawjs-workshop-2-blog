import routie from 'libs/routie.js';
import {PostService} from '../services/post.service.js';

routie('delete/:id', controller);

export function controller(id) {
  PostService.delete(id).then(post=>{
    routie('');
  })

}
