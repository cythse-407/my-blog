const posts = [
  {
    title: "How I Built This Blog",
    file: "posts/post1.html",
    date: "July 5, 2025",
    author: "_cythse"
  },
  {
     title: "About Me (The Author)",
     file: "posts/About.html",
     date: "July 4, 2025",
     author: "_cythse"
  }
];

const blogList = document.getElementById("blog-list");

posts.forEach(post => {
  const article = document.createElement("article");
  article.innerHTML = `
    <h2><a href="${post.file}">${post.title}</a></h2>
    <p><em>by ${post.author}</em></p>
    <p><em>${post.date}</em></p>
  `;
  blogList.appendChild(article);
});