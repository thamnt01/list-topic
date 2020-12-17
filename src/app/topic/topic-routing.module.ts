import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', redirectTo: 'topic/index', pathMatch: 'full' },
  { path: 'topic/index', component: IndexComponent },
  { path: 'topic/:topicId/view', component: ViewComponent },
  { path: 'topic/create', component: CreateComponent },
  { path: 'topic/:topicId/edit', component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicRoutingModule { }
