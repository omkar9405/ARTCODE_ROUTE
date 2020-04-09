import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentpromotionComponent } from './studentpromotion.component';

describe('StudentpromotionComponent', () => {
  let component: StudentpromotionComponent;
  let fixture: ComponentFixture<StudentpromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentpromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentpromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
