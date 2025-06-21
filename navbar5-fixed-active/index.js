const activePage = window.location.pathname.split("/").pop(); 
//console.log(activePage);

document.querySelectorAll('.navbar-menu a').forEach(link => {
  const linkPage = link.getAttribute("href");
  if (linkPage === activePage) {
    link.classList.add("active");
  }
});



