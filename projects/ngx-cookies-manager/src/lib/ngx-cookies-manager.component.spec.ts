import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCookiesManagerComponent } from './ngx-cookies-manager.component';

describe('NgxCookiesManagerComponent', () => {
  let component: NgxCookiesManagerComponent;
  let fixture: ComponentFixture<NgxCookiesManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCookiesManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCookiesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
