import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Search4Component } from './search4.component';

describe('Search4Component', () => {
  let component: Search4Component;
  let fixture: ComponentFixture<Search4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Search4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Search4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
