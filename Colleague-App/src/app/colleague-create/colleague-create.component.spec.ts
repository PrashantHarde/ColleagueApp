import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleagueCreateComponent } from './colleague-create.component';

describe('ColleagueCreateComponent', () => {
  let component: ColleagueCreateComponent;
  let fixture: ComponentFixture<ColleagueCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColleagueCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColleagueCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
