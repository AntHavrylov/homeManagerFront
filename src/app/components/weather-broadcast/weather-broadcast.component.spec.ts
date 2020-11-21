import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherBroadcastComponent } from './weather-broadcast.component';

describe('WeatherBroadcastComponent', () => {
  let component: WeatherBroadcastComponent;
  let fixture: ComponentFixture<WeatherBroadcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherBroadcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherBroadcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
