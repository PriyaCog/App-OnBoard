import { ICourseProgressDetails } from '../model/courseProgressDetails';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CourseProgressService {
    constructor() {}


 public getAssociate(): Observable<ICourseProgressDetails[]> {
        return of(this.getDetails());
    }

private getDetails():ICourseProgressDetails[]{
    const first={
        associateId:"123",
        associateName:"Anushya",
        status:"Completed"
    };
    const second={
        associateId:"1234",
        associateName:"Riya",
        status:"In-Progress"
    };
    const third={
        associateId:"125",
        associateName:"Shree",
        status:"Completed"
    };
    return [first, second, third] as ICourseProgressDetails[];
}
}    
