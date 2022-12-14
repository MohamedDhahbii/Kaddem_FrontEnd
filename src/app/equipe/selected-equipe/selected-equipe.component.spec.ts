import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedEquipeComponent } from './selected-equipe.component';

describe('SelectedEquipeComponent', () => {
  let component: SelectedEquipeComponent;
  let fixture: ComponentFixture<SelectedEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedEquipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
