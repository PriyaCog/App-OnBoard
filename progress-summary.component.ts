import { Component, OnInit, ViewChild } from '@angular/core';
import { ProgressSummaryService } from '../../service/progressSummary.service';
import { IProgressSummary } from '../../model/progressSummary';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'modal-content',
  templateUrl: './progress-summary.component.html',
  styleUrls: ['./progress-summary.component.css']
})
export class ProgressSummaryComponent implements OnInit {
  private progressSummary: IProgressSummary[];

  constructor(public bsModalRef: BsModalRef, private progressSummaryService: ProgressSummaryService) { }

  ngOnInit() {
    this.getProgressSummary();
  }

  private getProgressSummary() {
    this.progressSummaryService.getAssociate().subscribe(model => {
      this.progressSummary = model
    });
  };

}
