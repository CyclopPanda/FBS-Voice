
export default function ParseContent(posts, categories) {

  var remaining = posts.sort((a, b) => (new Date(a.datePublished) < new Date(b.datePublished)) ? 1 : -1);
  var sortedPosts = {};

  var latest = remaining[0];
  remaining = remaining.filter(remain => remain!=latest);
  sortedPosts["Latest"] = latest;
  
  for (let i=0; i<categories.length; i++) {
    var categoryPosts = [];
    categories[i]["posts"].map(
      postId => {
        var post = posts.filter(remain=>remain["id"]==postId["id"])[0];
        if (post!=null) {
          categoryPosts.push(post);
          remaining = remaining.filter(remain=>remain["id"]!=postId["id"]);
        }
      });
    sortedPosts[categories[i]["title"]] = categoryPosts;
  }

  sortedPosts["Remaining"] = remaining;

  return sortedPosts;
  
}