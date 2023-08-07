import { TestBed } from '@angular/core/testing';

import { TaskPrioritiesService } from './task-priorities.service';

describe('TaskPrioritiesService', () => {
  let service: TaskPrioritiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskPrioritiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
