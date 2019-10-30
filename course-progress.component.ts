import { Component, OnInit } from '@angular/core';
import { CourseProgressService } from '../../service/courseProgress.service';
import { ICourseProgressDetails } from '../../model/courseProgressDetails';
import { ProgressSummaryComponent } from '../progress-summary/progress-summary.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { IProgressSummary } from '../../model/progressSummary';
import { ProgressSummaryService } from '../../service/progressSummary.service';

@Component({
  selector: 'app-course-progress',
  templateUrl: './course-progress.component.html',
  styleUrls: ['./course-progress.component.css']
})

export class CourseProgressComponent implements OnInit {
  bsModalRef: BsModalRef;
  private courseProgressDetails: ICourseProgressDetails[];
  progressSummaryComponent: ProgressSummaryComponent;
  progressSummary: IProgressSummary;
  progressSummaryService: ProgressSummaryService;

  constructor(private courseProgressService: CourseProgressService, private modalService: BsModalService) {
  }

  viewProgressSummary() {
    this.bsModalRef = this.modalService.show(ProgressSummaryComponent);
  }

  ngOnInit() {
    this.getCourseProgressDetails();
  }

  private getCourseProgressDetails() {
    this.courseProgressService.getAssociate().subscribe(model => {
      this.courseProgressDetails = model
    });
  };

}
