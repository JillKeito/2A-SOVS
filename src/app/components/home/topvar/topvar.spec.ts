import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Topvar } from './topvar';

describe('Topvar', () => {
  let component: Topvar;
  let fixture: ComponentFixture<Topvar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Topvar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Topvar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
