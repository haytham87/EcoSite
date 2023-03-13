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
    if(menu){
      menu.addEventListener('click', function(){
        menu.classList.toggle('is-active');
    });
    }
  }

}
