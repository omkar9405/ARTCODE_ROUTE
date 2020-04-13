import { NgModule } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';
import { StudentRoutingModule} from './students_Info/student-routing.module';
import { LibraryRoutingModule } from './Library/Library-routing.module';
import {DownloadRoutingModule} from './Download Center/downloadcenter-routing.module';
import { CommunicateRoutingModule } from './Communicate/communicate-routing.module';
import { HostelRoutingModule } from './Hostel/hostel-routing.module';
import { InventoryRoutingModule } from './Inventory/inventory-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true}),StudentRoutingModule,CommunicateRoutingModule,LibraryRoutingModule,HostelRoutingModule,DownloadRoutingModule,InventoryRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
