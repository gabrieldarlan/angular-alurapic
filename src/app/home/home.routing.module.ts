import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
//
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // tslint:disable-next-line: comment-format
    //!verificar porque quando eu coloco a tela de login fica em branco
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: SignInComponent,
        // tslint:disable-next-line: comment-format
        //!verificar porque quando eu coloco a tela de login fica em branco
        // canActivate: [AuthGuard],
      },
      {
        path: 'signup',
        component: SignUpComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
