// Blog Post Object

// title
// body
// author
// views
// comments
//    (author, body)
// isLive

let post = {
  title: 'a',
  body: 'b',
  author: 'c',
  views: 1,
  comments: [{ author: 'a', body: 'b' }, { author: 'c', body: 'c' }],
  isLive: true
};

console.log(post);
// output
// {title: "a", body: "b", author: "c", views: 1, comments: Array(2), …}
// author: "c"
// body: "b"
// comments: (2) [{…}, {…}]
// isLive: true
// title: "a"
// views: 1
// __proto__: Object
