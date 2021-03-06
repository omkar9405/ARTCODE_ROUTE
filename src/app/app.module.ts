import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './dashboard/home/home.component';

import { ParentinfoComponent } from './dashboard/parentinfo/parentinfo.component';

import { TeacherinfoComponent } from './dashboard/teacherinfo/teacherinfo.component';
import { OnlineAdmissionComponent } from './students_Info/online-admission/online-admission.component';
import { DisabledStudentsComponent } from './students_Info/disabled-students/disabled-students.component';
import { BulkDeleteComponent } from './students_Info/bulk-delete/bulk-delete.component';
import { DisableReasonComponent } from './students_Info/disable-reason/disable-reason.component';
import { MultiClassStudentComponent } from './students_Info/multi-class-student/multi-class-student.component';
import { StudentCategoriesComponent } from './students_Info/student-categories/student-categories.component';
import { StudentHouseComponent } from './students_Info/student-house/student-house.component';
import { AddParentsComponent } from './parents_Info/add-parents/add-parents.component';
import { ParentsdetailsComponent } from './parents_Info/parentsdetails/parentsdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
    ParentinfoComponent,
  
    TeacherinfoComponent,
  
    AddParentsComponent,
    ParentsdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {path:'',redirectTo:'admin',pathMatch:'full'},
        {path:'admin',component:HomeComponent},
        {path:'parentsdetails',component:ParentsdetailsComponent},
        {path:'addparents',component:AddParentsComponent},
      ],{useHash:true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
