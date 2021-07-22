import { ImmediateClickModule } from './../../shared/directives/immediate-click/immediate-click.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//
import { PhotoFormComponent } from './photo-form.component';
import { VMessageModule } from './../../shared/components/vmessage/vmessage.module';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    FormsModule,
    RouterModule,
    PhotoModule,
    ImmediateClickModule,
  ],
})
export class PhotoFormModule {}
