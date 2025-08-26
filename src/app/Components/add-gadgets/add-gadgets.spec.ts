import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGadgets } from './add-gadgets';

describe('AddGadgets', () => {
  let component: AddGadgets;
  let fixture: ComponentFixture<AddGadgets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddGadgets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGadgets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
