## Adding Firebase Google Auth

- create firebase project
  - add android project

- init ionic project
  - install:
    - @capacitor-firebase/authentication
    - firebase
  - create button trigger for social authentication
  follow this https://github.com/robingenz/capacitor-firebase-authentication

- add code to project
  - import FirebaseAuthenication from @capacitor-firebase
  - Add button to trigger authentication

- add android to project
  - run add android command
  - run sync command
  - add firebase bom and google-auth to the app level build.gradle. i.e     
  ```
  implementation 'com.google.firebase:firebase-auth'
    implementation 'com.google.android.gms:play-services-auth:20.3.0'
  ```
    under dependencies option as indecated in https://firebase.google.com/docs/android/setup and https://firebase.google.com/docs/auth/android/google-signin.

- add google-service.json
  - generate signing key from android studio
  - run 
  ```
  keytool -list -v \
   -alias <key-file-alias> -keystore ./<key-file-name>
   ```
   to get the SHA 1 key to add to the android firebase project.
   This is very important as it is used to map to the project

   - go to sign-in method and set google signin to true
   - add support email (if not added you would get a 12500 error)
   - download the `google-service.json` file
   - move the file to the app level folder

- Run sync of android
- open on android studio
- build with the signin key created 
- install and test