// Method -> obj
// function -> global (window, global)

// by Arrow Function --------------------------
const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(tag => {
      console.log(this.title, tag);
    });
  }
};

video.showTags();
// output
// a a
// a b
// a c
