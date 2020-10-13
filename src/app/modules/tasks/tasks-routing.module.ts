import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {marker} from '@biesbjerg/ngx-translate-extract-marker';

import {RouterTitle} from '../../constants';
import {Shell} from '../shell/services';
import {TasksComponent} from './tasks.component';

const routes: Routes = [
  Shell.childRoutes([
    {path: '', component: TasksComponent, data: {title: marker(RouterTitle.TASKS)}}
  ]),
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {
}
