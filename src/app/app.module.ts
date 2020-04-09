import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './dashboard/home/home.component';
import { AllStudentsComponent } from './students/all-students/all-students.component';
import { StudentsdetailsComponent } from './students/studentsdetails/studentsdetails.component';
import { AdmissionformComponent } from './students/admissionform/admissionform.component';
import { StudentpromotionComponent } from './students/studentpromotion/studentpromotion.component';
import { ParentinfoComponent } from './dashboard/parentinfo/parentinfo.component';
import { StudentinfoComponent } from './dashboard/studentinfo/studentinfo.component';
import { TeacherinfoComponent } from './dashboard/teacherinfo/teacherinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllStudentsComponent,
    StudentsdetailsComponent,
    AdmissionformComponent,
    StudentpromotionComponent,
    ParentinfoComponent,
    StudentinfoComponent,
    TeacherinfoComponent,
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
        {path:'allstudent',component:AllStudentsComponent},
        {path:'admissionform',component:AdmissionformComponent},
        {path:'studentpromotion',component:StudentpromotionComponent},
        {path:'studentdetails',component:StudentsdetailsComponent},
        {path:'parentinfo',component:ParentinfoComponent},
        {path:'studentinfo',component:StudentinfoComponent},
        {path:'teacherinfo',component:TeacherinfoComponent},
      ],{useHash:true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
