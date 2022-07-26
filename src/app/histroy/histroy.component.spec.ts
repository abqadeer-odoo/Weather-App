import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistroyComponent } from './histroy.component';

describe('HistroyComponent', () => {
  let component: HistroyComponent;
  let fixture: ComponentFixture<HistroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistroyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
