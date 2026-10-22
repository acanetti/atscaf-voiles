"use strict";

if (typeof journalAlbums === "undefined" || !Array.isArray(journalAlbums)) {
  document.querySelector("#albums-error").hidden = false;
  throw new Error("Album inventory is missing. Run node scripts/generate-albums.mjs.");
}

const albumTemplate = document.querySelector("#album-template");
const photoTemplate = document.querySelector("#photo-template");
const albumList = document.querySelector("#album-list");
const albumFragment = document.createDocumentFragment();

journalAlbums.forEach((album) => {
  if (document.getElementById(album.id)) {
    document.querySelector("#albums-error").hidden = false;
    throw new Error(`Album id is already used on this page: ${album.id}`);
  }
  const content = albumTemplate.content.cloneNode(true);
  const details = content.querySelector("details");
  details.id = album.id;
  details.open = album.open;
  content.querySelector(".album-heading strong").textContent = album.title;
  content.querySelector(".album-heading small").textContent = album.description;
  content.querySelector(".album-count").textContent = `${album.photos.length} ${album.label}${album.photos.length > 1 ? "s" : ""}`;
  const gallery = content.querySelector(".journal-gallery");

  album.photos.forEach((photo) => {
    const card = photoTemplate.content.cloneNode(true);
    const link = card.querySelector("a");
    link.href = photo.src;
    link.setAttribute("aria-label", `Agrandir : ${photo.caption}`);
    const image = card.querySelector("img");
    image.src = photo.src;
    image.alt = photo.alt;
    image.width = photo.width;
    image.height = photo.height;
    card.querySelector("figcaption").textContent = photo.caption;
    gallery.append(card);
  });

  if (album.photos.length === 0) {
    const message = document.createElement("p");
    message.textContent = "Cet album ne contient pas encore de photos.";
    gallery.append(message);
  }
  albumFragment.append(content);
});
albumList.append(albumFragment);

if (journalAlbums.length === 0) {
  const message = document.createElement("p");
  message.textContent = "Aucun album n’est encore disponible.";
  albumList.append(message);
}

function openLinkedAlbum(hash) {
  const target = document.getElementById(hash.slice(1));
  if (target?.matches(".journal-album")) target.open = true;
}

openLinkedAlbum(location.hash);
if (location.hash && document.getElementById(location.hash.slice(1))) {
  document.getElementById(location.hash.slice(1)).scrollIntoView();
}
window.addEventListener("hashchange", () => openLinkedAlbum(location.hash));
document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (link) openLinkedAlbum(link.hash);
});

const photoDialog = document.querySelector(".photo-dialog");
const enlargedPhoto = document.querySelector("#photo-enlarged");
const photoCaption = document.querySelector("#photo-caption");
const photoError = document.querySelector("#photo-error");
const previousPhoto = document.querySelector("#photo-previous");
const nextPhoto = document.querySelector("#photo-next");
const photoPosition = document.querySelector("#photo-position");
let albumPhotos = [];
let photoIndex = 0;

function displayPhoto(index) {
  photoIndex = index;
  const link = albumPhotos[photoIndex];
  const thumbnail = link.querySelector("img");
  photoError.hidden = true;
  enlargedPhoto.hidden = false;
  enlargedPhoto.alt = thumbnail.alt;
  enlargedPhoto.src = link.href;
  photoCaption.textContent = link.closest("figure").querySelector("figcaption").textContent;
  photoPosition.textContent = `${photoIndex + 1} / ${albumPhotos.length}`;
  const focusedButton = document.activeElement;
  previousPhoto.disabled = photoIndex === 0;
  nextPhoto.disabled = photoIndex === albumPhotos.length - 1;
  if (focusedButton === previousPhoto && previousPhoto.disabled) nextPhoto.focus({ preventScroll: true });
  if (focusedButton === nextPhoto && nextPhoto.disabled) previousPhoto.focus({ preventScroll: true });
}

previousPhoto.addEventListener("click", () => {
  if (photoIndex > 0) displayPhoto(photoIndex - 1);
});
nextPhoto.addEventListener("click", () => {
  if (photoIndex < albumPhotos.length - 1) displayPhoto(photoIndex + 1);
});

document.querySelectorAll(".journal-gallery a").forEach((link) => {
  link.setAttribute("aria-haspopup", "dialog");
  link.addEventListener("click", (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    albumPhotos = Array.from(link.closest(".journal-gallery").querySelectorAll("a"));
    displayPhoto(albumPhotos.indexOf(link));
    photoDialog.showModal();
    photoDialog.focus({ preventScroll: true });
  });
});

enlargedPhoto.addEventListener("error", () => {
  enlargedPhoto.hidden = true;
  photoError.hidden = false;
});

photoDialog.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    photoDialog.close();
  } else if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    if (event.key === "ArrowLeft" && photoIndex > 0) displayPhoto(photoIndex - 1);
    if (event.key === "ArrowRight" && photoIndex < albumPhotos.length - 1) displayPhoto(photoIndex + 1);
  }
});

let backdropPointerDown = false;
photoDialog.addEventListener("pointerdown", (event) => {
  backdropPointerDown = event.target === photoDialog;
});
photoDialog.addEventListener("click", (event) => {
  if (backdropPointerDown && event.target === photoDialog) photoDialog.close();
  backdropPointerDown = false;
});
