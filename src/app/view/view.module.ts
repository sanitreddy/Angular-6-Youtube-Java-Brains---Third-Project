import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ViewComponentComponent } from './view-component/view-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ViewComponentComponent],
  exports: [ViewComponentComponent]
})
export class ViewModule { }
