
export class PostService {

  static list() {
    return $.ajax({
      url: "/posts",
      cache: false
    });
  }

  static create(data) {
    return $.ajax({
      url: "/posts",
      method: "POST",
      data: data
    });
  }

  static get(id) {
    return $.ajax({
      url: "posts/"+id,
      cache: false
    });
  }

  static delete(id) {
    return $.ajax({
      url: "posts/"+id,
      method: "DELETE"
    });
  }

}
