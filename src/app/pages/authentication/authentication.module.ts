import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthenticationRoutingModule, LoginModule]
})
export class AuthenticationModule {}
