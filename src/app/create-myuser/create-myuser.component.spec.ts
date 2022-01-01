import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMyuserComponent } from './create-myuser.component';

describe('CreateMyuserComponent', () => {
  let component: CreateMyuserComponent;
  let fixture: ComponentFixture<CreateMyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMyuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
