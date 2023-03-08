import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsNavbarComponent } from './ads-navbar.component';

describe('AdsNavbarComponent', () => {
  let component: AdsNavbarComponent;
  let fixture: ComponentFixture<AdsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
