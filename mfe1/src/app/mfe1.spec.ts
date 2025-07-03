import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mfe1 } from './mfe1';

describe('Mfe1', () => {
  let component: Mfe1;
  let fixture: ComponentFixture<Mfe1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mfe1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mfe1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
