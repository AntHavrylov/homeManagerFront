import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSalonComponent } from './home-salon.component';

describe('HomeSalonComponent', () => {
  let component: HomeSalonComponent;
  let fixture: ComponentFixture<HomeSalonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSalonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
