'use strict';

/* =========================
   SIDEBAR (MÓVIL)
========================= */
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

if (sidebarBtn) {
  sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });
}

/* =========================
   NAVEGACIÓN ENTRE SECCIONES
========================= */
const navLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

navLinks.forEach((link, index) => {
  link.addEventListener('click', () => {

    navLinks.forEach(btn => btn.classList.remove('active'));
    pages.forEach(page => page.classList.remove('active'));

    link.classList.add('active');
    pages[index].classList.add('active');

    // Cerrar sidebar en móvil
    sidebar.classList.remove('active');
  });
});
