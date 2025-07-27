import blog, { ga } from "blog";

blog({
  title: "Ezra Natanael",
  author: "Ezra Natanael",
  avatar: "./posts/static/_.jpeg",
  avatarClass: "rounded-full",
  description: "Software Engineer",
  links: [
    { title: "Email", url: "mailto:ezrantn@proton.me" },
    { title: "GitHub", url: "https://github.com/ezrantn" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/ezrantn" },
    { title: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=iubOEX4AAAAJ" }
  ],
  middlewares: [
    ga("G-RJ3SV8DLML"),
  ],
  favicon: "favicon.ico"
});
