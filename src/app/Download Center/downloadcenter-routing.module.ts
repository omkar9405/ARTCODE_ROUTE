import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UploadContentComponent } from './upload-content/upload-content.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { StudyMaterialComponent } from './study-material/study-material.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { OtherDownloadsComponent } from './other-downloads/other-downloads.component';

const routes: Routes = [
  {path: 'app-other-downloads', component: OtherDownloadsComponent },
   {path: 'app-assignment', component: AssignmentComponent },
   {path: 'app-study-material', component: StudyMaterialComponent },
   {path: 'app-syllabus', component: SyllabusComponent },
    {path:'app-upload-content',component: UploadContentComponent},  
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DownloadRoutingModule { }
