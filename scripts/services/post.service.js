let posts = [
  {id: 1, title: 'pierwszy post', text: 'tresc posta'},
  {id: 2, title: 'drugi post', text: 'tresc posta drugiego'}
]

export class PostService {

  static list() {
    return new Promise((resolve, reject) => {
      resolve(posts);
    })
  }

  static create(data) {
    data.id = posts.length+1;
    posts.push(data);
    return new Promise((resolve, reject) => {
      resolve(data);
    })
  }

  static get(id) {
    return new Promise((resolve, reject) => {
      for(let post of posts) {
        if(post.id === parseInt(id)) {
          return resolve(post);
        }
      }
      reject('Post not found. Please enter a valid post ID.');
    })
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      if (posts[id-1]) {
        posts.splice(id-1, 1);
        resolve();
      } else {
        reject();
      }
    })
  }

}
