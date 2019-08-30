import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetpanPage } from './detpan.page';

describe('DetpanPage', () => {
  let component: DetpanPage;
  let fixture: ComponentFixture<DetpanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetpanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetpanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
