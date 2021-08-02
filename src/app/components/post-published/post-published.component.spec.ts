import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPublishedComponent } from './post-published.component';

describe('PostPublishedComponent', () => {
  let component: PostPublishedComponent;
  let fixture: ComponentFixture<PostPublishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPublishedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPublishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
