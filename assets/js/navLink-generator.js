const navLinks = [{
    label: "Home",
    href: "index.html",
  },
  {
    label: "Facts",
    href: "pages/facts.html",
  },
  {
    label: "Recipes",
    href: "pages/recipes.html",
  },
  {
    label: "Gifts",
    href: "pages/gifts.html",
  },
  {
    label: "Songs",
    href: "pages/songs.html",
  },
  {
    label: "Games",
    href: "pages/games.html",
  },
  {
    label: "Films",
    href: "pages/films.html",
  },
  {
    label: "Books",
    href: "pages/books.html",
  },
  {
    label: "Activities",
    href: "pages/activities.html",
  },
  {
    label: "Name Generators",
    href: "pages/name-generators.html",
  },
  {
    label: "International",
    href: "pages/international.html",
  },
  {
    label: "Party Costumes",
    href: "pages/party-costumes.html",
  },
  {
    label: "Wishes",
    href: "pages/wishes.html"
  },
  {
    label: "Blog",
    href: "pages/blog.html",
  },  
  {
    label: "Stock Photos",
    href: "pages/stock-photos.html",
  },
  {
    label: "Calendar",
    href: "pages/calendar.html",
  },
  {
    label: "Contact Us",
    href: "#footer",
  },
];

const generateLinks = () => {
  let dropdownEl = null;
  if (document.getElementById("nav-dropdown")) {
    dropdownEl = document.getElementById("nav-dropdown");
  } else {
    dropdownEl = document.getElementById("nav-dropdown-from-page");
    navLinks.pop();
  }

  navLinks.forEach(navLink => {
    if (document.getElementById("nav-dropdown-from-page")) {
      navLink.href = `../${navLink.href}`;
    }

    const anchor = document.createElement("a");
    anchor.href = navLink.href;
    anchor.className = "dropdown-item";
    anchor.innerText = navLink.label;
    dropdownEl.appendChild(anchor);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  generateLinks();
});