import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullForcastComponent } from './full-forcast.component';

describe('FullForcastComponent', () => {
  let component: FullForcastComponent;
  let fixture: ComponentFixture<FullForcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullForcastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullForcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
