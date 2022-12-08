import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEtudiantAssignEquipeDepartementComponent } from './add-etudiant-assign-equipe-departement.component';

describe('AddEtudiantAssignEquipeDepartementComponent', () => {
  let component: AddEtudiantAssignEquipeDepartementComponent;
  let fixture: ComponentFixture<AddEtudiantAssignEquipeDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEtudiantAssignEquipeDepartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEtudiantAssignEquipeDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
