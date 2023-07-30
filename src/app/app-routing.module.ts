import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const routes: Routes = [{
  path:'',
  component:ToolbarComponent,
  pathMatch:'full'
},
{
  path:'cronograma',
  component:SchedulerComponent,
  // pathMatch:'full'
  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
