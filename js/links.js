const favlinks = document.getElementById("links");
const linksModal = document.getElementById("links-modal");
const addLink = document.getElementById("add-link");
const favorites = document.getElementById("favorites");
const newLink = document.getElementById("new-link");
const newLinkForm = document.getElementById("new-link-form");
const linkname = document.getElementById("name");
const url = document.getElementById("url");

let links = [];

favlinks.addEventListener("click", () => {
  linksModal.classList.toggle("hidden");
  newLink.classList.add("hidden");
});

addLink.addEventListener("click", () => {
  linksModal.classList.add("hidden");
  newLink.classList.remove("hidden");
});

function handleLinkSubmit(event) {
  event.preventDefault();
  const nameVal = linkname.value;
  const urlVal = url.value;
  const newLinkObj = {
    name: nameVal,
    url: urlVal,
    id: Date.now(),
  };
  links.push(newLinkObj);
  saveLink();
  paintLink(newLinkObj);
  linksModal.classList.remove("hidden");
  newLink.classList.add("hidden");

  linkname.value = "";
  url.value = "";
}

function deleteLink(event) {
  const div = event.target.parentElement;
  div.remove();
  links = links.filter((link) => link.id !== parseInt(div.id));
  saveLink();
}

function paintLink(link) {
  const div = document.createElement("div");
  div.id = link.id;
  const anchor = document.createElement("a");
  const nameVal = link.name;
  const urlVal = link.url;
  anchor.href = urlVal;
  const image = document.createElement("img");
  image.src = `https://s2.googleusercontent.com/s2/favicons?domain_url=${urlVal}`;
  anchor.appendChild(image);
  const span = document.createElement("span");
  const emoji = document.createElement("button");
  span.innerText = nameVal;
  emoji.innerText = "❌";
  emoji.addEventListener("click", deleteLink);
  anchor.appendChild(span);
  div.appendChild(anchor);
  div.appendChild(emoji);
  favorites.appendChild(div);
}

function saveLink() {
  localStorage.setItem("favorites", JSON.stringify(links));
}

newLinkForm.addEventListener("submit", handleLinkSubmit);

const savedLinks = localStorage.getItem("favorites");
if (savedLinks) {
  const parsedLinks = JSON.parse(savedLinks);
  links = parsedLinks;
  parsedLinks.forEach(paintLink);
}
