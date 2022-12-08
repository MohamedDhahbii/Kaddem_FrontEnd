import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContratAssignEtudiantComponent } from './add-contrat-assign-etudiant.component';

describe('AddContratAssignEtudiantComponent', () => {
  let component: AddContratAssignEtudiantComponent;
  let fixture: ComponentFixture<AddContratAssignEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContratAssignEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContratAssignEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
