function openMenu() {
  document.body.classList += " menu--open"
}

function closeMenu() {
  document.body.classList.remove('menu--open')
}
$$("*").forEach(el => el.style.outline = "1px solid red");
