import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private firebaseService: FirebaseService) {}
  public async createUser(
    email: string,
    password: string,
    name: string
  ): Promise<void> {
    await this.firebaseService.createUserWithEmailAndPassword(
      email,
      password,
      name
    );
  }

  public async login(email: string, password: string): Promise<void> {
    await this.firebaseService.signInWithEmailAndPassword(email, password);
  }

  public async logout(): Promise<void> {
    await this.firebaseService.logout();
  }

  public async getUser() {
    return await this.firebaseService.getUser();
  }
}
