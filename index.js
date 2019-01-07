let post = new Post('a', 'b', 'c');

function Post(title, body, author) {
  (this.title = title),
    (this.body = body),
    (this.author = author),
    (this.views = 0),
    (this.comment = []),
    (this.isLive = false);
}

console.log(post);
// output
// Post {title: "a", body: "b", author: "c", views: 0, comment: Array(0), …}
// author: "c"
// body: "b"
// comment: []
// isLive: false
// title: "a"
// views: 0
// __proto__: Object
