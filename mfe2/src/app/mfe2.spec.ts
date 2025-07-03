import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mfe2 } from './mfe2';

describe('Mfe2', () => {
  let component: Mfe2;
  let fixture: ComponentFixture<Mfe2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mfe2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mfe2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
