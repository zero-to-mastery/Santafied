const navLinks = [
  {
    label: "Home",
    href:  "index.html",
  },
  {
    label: "Facts",
    href:  "pages/facts.html",
  },
  {
    label: "Recipes",
    href:  "pages/recipes.html",
  },
  {
    label: "Gifts",
    href:  "pages/gifts.html",
  },
  {
    label: "Songs",
    href:  "pages/songs.html",
  },
  {
    label: "Games",
    href:  "pages/games.html",
  },
  {
    label: "Films",
    href:  "pages/films.html",
  },
  {
    label: "Books",
    href:  "pages/books.html",
  },
  {
    label: "Activities",
    href:  "pages/activities.html",
  },
  {
    label: "Elf Name Generator",
    href:  "pages/elf-name-generator.html",
  },
  {
    label: "International",
    href:  "pages/international.html",
  },
  {
    label: "Party Costumes",
    href:  "party-costumes.html",
  },
  {
    label: "Contact Us",
    href:  "#footer",
  },
];

const generateLinks = () => {
  navLinks.forEach(navLink => {
    const anchor = document.createElement("a");
    anchor.href = navLink.href;
    anchor.className = "dropdown-item";
    anchor.innerText = navLink.label;

    document.getElementById("nav-dropdown").appendChild(anchor);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  generateLinks();
});