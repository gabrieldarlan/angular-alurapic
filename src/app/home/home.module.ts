import { VMessageModule } from './../shared/components/vmessage/vmessage.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './signin/signin.component';

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, ReactiveFormsModule, VMessageModule],
})
export class HomeModule {}
