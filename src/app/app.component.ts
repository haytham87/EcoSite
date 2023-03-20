import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EcoSite';

  loader=true

  ngOnInit(): void {
    setTimeout(()=> {
      this.loader=false
    }, 8000)
  }
  onActive(){
    window.scroll(0, 0);
  }
}
