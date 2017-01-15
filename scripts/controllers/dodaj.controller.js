import {PostService} from '../services/post.service.js';

export const path = '/index.html';

export function index() {
  console.log('run dodaj mnie')
  PostService.create({'sample': 'data'})
}
