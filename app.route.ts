import { NgModule, Injectable } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProjectGroupPlanComponent } from './components/projectGroupPlan/projectGroupPlan.component';
import { AssociatePlanComponent } from './components/associatePlan/associatePlan.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouteAuthorization } from './service/routeAuthorization.service';
import { AssociateListComponent } from './components/associatePlan/associateList.component';
import { AssociateDetailComponent } from './components/associatePlan/associateDetail.component';
import { RedirectOnBoardComponent } from './shared/redirect-onboard.component';
import { AllocationDetailsComponent } from "./components/allocation-details/allocation-details.component";
import { UpdateDetailsComponent } from "./components/update-details/update-details.component";
import { UpdateFormComponent } from "./components/update-form/update-form.component";
import { BulkModifyComponent } from "./components/allocation-details/bulk-modify/bulk-modify.component";
import { MarginListComponent } from "./components/allocation-details/margin-list/margin-list.component";
import {CourseProgressComponent} from './components/course-progress/course-progress.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', canActivate: [RouteAuthorization], component: DashboardComponent },
    { path: 'associatePlan', component: AssociatePlanComponent }, // ok
    { path: 'onboarding', component: RedirectOnBoardComponent }, // ok
    { path: 'projectGroupPlan', component: ProjectGroupPlanComponent },
    { path: 'dashboard', component: DashboardComponent }, // ok
    { path: 'associateList', component: AssociateListComponent }, // ok
    { path: 'associateDetail/:id', component: AssociateDetailComponent }, // ok
    { path: 'resourceDetail', component: AllocationDetailsComponent },
    { path: 'bulkmodify', component: BulkModifyComponent },
    { path: 'marginlist', component: MarginListComponent },
    { path: 'CreateRecord', component: UpdateDetailsComponent },
    { path: 'UpdateRecord', component: UpdateFormComponent },
     { path: 'courseProgress', component: CourseProgressComponent },
    { path: '**', pathMatch: 'full', canActivate: [RouteAuthorization], component: DashboardComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    providers: [RouteAuthorization],
    exports: [RouterModule],
})
export class AppRoutingModule { }

export const RoutingComponents = [ProjectGroupPlanComponent, AssociatePlanComponent, AssociateListComponent, DashboardComponent, AllocationDetailsComponent,CourseProgressComponent];