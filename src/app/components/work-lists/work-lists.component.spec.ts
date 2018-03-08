import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkListsComponent } from './work-lists.component';

describe('WorkListsComponent', () => {
  let component: WorkListsComponent;
  let fixture: ComponentFixture<WorkListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
