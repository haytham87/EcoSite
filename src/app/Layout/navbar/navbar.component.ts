import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.mobile-navigation-menu');
    if (menu && menuLinks) {
      menu.addEventListener('click', function () {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
      });
    }

    const menuClose = document.querySelector('.menu-close-btn');
    if(menuClose && menuLinks) {
      menuClose.addEventListener('click', function () {
        menuLinks.classList.toggle('active');
      })
    }


    const langBtn = document.querySelector('.caret-back');
    const langList = document.querySelector('.Lang-list');
    if (langBtn) {
      langBtn.addEventListener('click', function () {
        langBtn.classList.toggle('is-active');
        langList?.classList.toggle('active');
      })
    }
  }
}
