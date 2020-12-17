import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicRoutingModule } from './topic-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [IndexComponent, ViewComponent, EditComponent, CreateComponent],
  imports: [
    CommonModule,
    TopicRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TopicModule { }
