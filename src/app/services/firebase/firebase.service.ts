import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { environment } from '../../../environments/environment';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app = initializeApp(environment.firebaseConfig);
  private db = getFirestore(this.app);
  private readonly auth;

  constructor() {
    this.auth = getAuth(this.app);
  }
  public getAuthFirebase() {
    return getAuth(this.app);
  }

  public async createUserWithEmailAndPassword(
    email: string,
    password: string,
    name: string
  ) {
    try {
      const { user } = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      await updateProfile(user, { displayName: name });
      return user;
    } catch (error) {
      return null;
    }
  }

  public async signInWithEmailAndPassword(email: string, password: string) {
    try {
      const { user } = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user;
    } catch (error) {
      return null;
    }
  }

  public async logout(): Promise<void> {
    await signOut(this.auth);
  }

  public async getUser() {
    try {
      const { currentUser } = this.auth;
      return currentUser;
    } catch (error) {
      return null;
    }
  }
}
