/*

----Initial setup----

1. visit" console.firebase.google.com
2. create project (skip google analytics)
3. register app (create config)
4. install firebase
5. add config file to the project.
6. Danger: do not publish or make firebase config to public by publishing those to GitHUb

----Integration----

7. visit: go to docs>build>authentication>web>get Started
8. export app from the firebase.config.js file : export default app 
9. Login.jsx import getAuth from firebase/auth
10. create const auth = getAuth(app)

----Provider setup----

11. impor googleAuthProvider and create a new provider
12. use signInWithPopup and pass auth and provider
13. activate sign in method (google,facebook, github etc)
14. change 127.0.0.1 to localHost

---- More Auth Provider GitHUb----
1. Activate the auth provider (create app , provide redirect url , client id, client secret)
*/