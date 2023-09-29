import { NgModule } from '@angular/core';
import { AuthenticationModule } from './authentication/authentication.module';
import { FirebaseModule } from './firebase/firebase.module';

@NgModule({
  imports: [AuthenticationModule, FirebaseModule],
  exports: [AuthenticationModule]
})
export class ServicesModule {}
