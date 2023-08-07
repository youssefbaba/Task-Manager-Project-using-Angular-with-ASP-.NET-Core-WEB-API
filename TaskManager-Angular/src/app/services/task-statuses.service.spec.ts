import { TestBed } from '@angular/core/testing';

import { TaskStatusesService } from './task-statuses.service';

describe('TaskStatusesService', () => {
  let service: TaskStatusesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskStatusesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
