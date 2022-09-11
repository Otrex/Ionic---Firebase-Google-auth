import { FirebaseAuthentication, GetIdTokenOptions, SignInWithPhoneNumberOptions, SignInWithPhoneNumberResult, User } from "@capacitor-firebase/authentication"
import { Capacitor } from '@capacitor/core'
import { initializeApp } from '@firebase/app';

const environment = {
  firebase: {
    apiKey: "AIzaSyBiOf1QkQgPYZRmznkQqrd4WrRrKJUxsYg",
    authDomain: "otrex-socials.firebaseapp.com",
    projectId: "otrex-socials",
    storageBucket: "otrex-socials.appspot.com",
    messagingSenderId: "869994322369",
    appId: "1:869994322369:web:6b2641f5ce1b7c64843740",
    measurementId: "G-R5YN3X1CKR"
  }
}


function check (fn: (...args: any[]) => any, ...args: any[]) {
  return {
    is: (value: any) => {
      return (() => fn(...args))() === value
    }
  }
}

export class FirebaseAuthenticationService {

  constructor(
  ) {
    FirebaseAuthentication.removeAllListeners().then(() => {
      FirebaseAuthentication.addListener('authStateChange', (change) => {
        console.log(change);
      });
    });
  }

  public async initialize(): Promise<void> {
    if (check(Capacitor.getPlatform).is('capacitor')) {
      return;
    }
    /**
     * Only needed if the Firebase JavaScript SDK is used.
     *
     * Read more: https://github.com/robingenz/capacitor-firebase/blob/main/packages/authentication/docs/firebase-js-sdk.md
     */
    initializeApp(environment.firebase);
  }

  public async getCurrentUser(): Promise<User | null> {
    const result = await FirebaseAuthentication.getCurrentUser();
    return result.user;
  }

  public async getIdToken(options?: GetIdTokenOptions): Promise<string> {
    const result = await FirebaseAuthentication.getIdToken(options);
    return result.token;
  }

  public async setLanguageCode(languageCode: string): Promise<void> {
    await FirebaseAuthentication.setLanguageCode({ languageCode });
  }

  public async signInWithApple(): Promise<void> {
    await FirebaseAuthentication.signInWithApple();
  }

  public async signInWithFacebook(): Promise<void> {
    await FirebaseAuthentication.signInWithFacebook();
  }

  public async signInWithGithub(): Promise<void> {
    await FirebaseAuthentication.signInWithGithub();
  }

  public async signInWithGoogle(): Promise<any> {
    try {
      const r = await FirebaseAuthentication.signInWithGoogle();
      console.log(r);
      return r
    } catch (error) {
      return error
    }
  }

  public async signInWithMicrosoft(): Promise<void> {
    await FirebaseAuthentication.signInWithMicrosoft();
  }

  public async signInWithPlayGames(): Promise<void> {
    await FirebaseAuthentication.signInWithPlayGames();
  }

  public async signInWithTwitter(): Promise<void> {
    await FirebaseAuthentication.signInWithTwitter();
  }

  public async signInWithYahoo(): Promise<void> {
    await FirebaseAuthentication.signInWithYahoo();
  }

  public async signInWithPhoneNumber(
    options: SignInWithPhoneNumberOptions
  ): Promise<SignInWithPhoneNumberResult> {
    return FirebaseAuthentication.signInWithPhoneNumber(options);
  }

  public async signOut(): Promise<void> {
    await FirebaseAuthentication.signOut();
  }

  public async useAppLanguage(): Promise<void> {
    await FirebaseAuthentication.useAppLanguage();
  }
}
