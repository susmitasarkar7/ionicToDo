import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TododetailsPage } from './tododetails.page';

describe('TododetailsPage', () => {
  let component: TododetailsPage;
  let fixture: ComponentFixture<TododetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TododetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TododetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
