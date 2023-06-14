import { TranslateService } from '@ngx-translate/core';
import { BaseService } from './core/services/base.service';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nosa Skin';

  constructor(
    private baseService:BaseService,
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2
  ){

  }
  loader=true

  ngOnInit(): void {
    setTimeout(()=> {
      this.loader=false
    }, 1000)
    if (localStorage.getItem('dir')) {
      this.baseService.dir = localStorage.getItem('dir');
      this.baseService.lang = localStorage.getItem('lang');
      this.baseService.isRTL = localStorage.getItem('dir') === 'rtl' ? true : false;
    }
    else {
      this.baseService.dir = 'rtl';
      this.baseService.lang = 'ar';
      this.baseService.isRTL = true;
      localStorage.setItem('dir', this.baseService.dir);
      localStorage.setItem('lang', this.baseService.lang);
    }
    this.translate.use(this.baseService.lang);
    document.getElementsByTagName('html')[0].setAttribute('dir', this.baseService.dir);
    document.getElementsByTagName('body')[0].classList.remove(this.baseService.dir === 'rtl' ? 'ltr' : 'rtl');
    document.getElementsByTagName('body')[0].classList.add(this.baseService.dir);
  }
  onActive(){
    window.scroll(0, 0);
  }
}
