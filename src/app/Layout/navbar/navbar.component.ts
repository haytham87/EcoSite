import { TranslateService } from '@ngx-translate/core';
import { BaseService } from './../../core/services/base.service';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  lang='';
  element: any;
  flagvalue: any;
  cookieValue: any;
  countryName: any;
  valueset: any;
  dir:boolean=true;
  serachOpen:boolean = false;
  constructor(
    @Inject(DOCUMENT) private document: any,
    public baseService:BaseService,
    private renderer: Renderer2,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.mobile-navigation-menu');
    if (menu && menuLinks) {
      menu.addEventListener('click', function () {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
      });
    }
    
    this.baseService.dir = localStorage.getItem('dir');
    if(this.baseService.dir==='rtl')this.dir=true;
    else this.dir=false;

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

  changeLangEN() {
    document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
    this.renderer.addClass(this.document.body,'ltr');
    this.baseService.isRTL= false;
    localStorage.setItem('lang','en');
    localStorage.setItem('dir','ltr');
    this.baseService.lang='en';
    this.translate.use('en');
    this.dir = false;
    parent.document.location.reload();
    // this.document.parent.reload();

  }

  changeLangAR() {
    document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
    this.renderer.addClass(this.document.body,'rtl');
    this.baseService.isRTL= true;
    localStorage.setItem('lang','ar');
    localStorage.setItem('dir','rtl');
    this.baseService.lang='ar';
    this.translate.use('ar');
    this.dir = true;
    parent.document.location.reload();
    // this.document.parent.reload();
  }
}
