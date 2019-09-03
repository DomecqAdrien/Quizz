import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpanneauPage } from './detailpanneau.page';

describe('DetailpanneauPage', () => {
  let component: DetailpanneauPage;
  let fixture: ComponentFixture<DetailpanneauPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailpanneauPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailpanneauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
