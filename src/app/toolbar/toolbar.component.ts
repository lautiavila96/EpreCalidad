import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { Router } from '@angular/router';
import { SchedulerComponent } from '../scheduler/scheduler.component';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],

})
export class ToolbarComponent {
  
  constructor(private router:Router){}

   navegar(){
    this.router.navigate(['/cronograma'])
    //   this.router.navigate(['/agregar-sorteos'])
   }

}
