import blog, { ga } from "blog";

blog({
  title: "Ezra Natanael",
  author: "Ezra Natanael",
  avatar: "https://deno-avatar.deno.dev/avatar/blog.svg",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:ezrantn@proton.me" },
    { title: "GitHub", url: "https://github.com/ezrantn" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/ezrantn" },
  ],
  middlewares: [
    ga("UA-XXXXXXXX-X"),
  ]
});
