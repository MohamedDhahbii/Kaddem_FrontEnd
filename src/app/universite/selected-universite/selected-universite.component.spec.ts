import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedUniversiteComponent } from './selected-universite.component';

describe('SelectedUniversiteComponent', () => {
  let component: SelectedUniversiteComponent;
  let fixture: ComponentFixture<SelectedUniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedUniversiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedUniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
