import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";
const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSingIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser)
            })
            .catch(error => {
                console.log('Error', error.message);
            })
    }
    const handleGithubSingIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser)
            })
            .catch(error => {
                console.log( error);
            })
    }
    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null)
            })
            .catch(error => {
                console.log(error);
            })

    }


    return (
        <div>
            {/* div make btn conditional user ? logout : sing in */}

            {
                user ?
                    <button onClick={handleSignOut}>Sign out</button>
                    :
                    <>
                        <button onClick={handleGoogleSingIn}>Google Log in</button>
                        <button onClick={handleGithubSingIn}>GitHub Login</button>
                    </>
            }
            {/* <div>
                <h3>User: {user?.displayName}</h3>
            </div> */}
            {/* another system using conditional rendering */}
            {
                user && <div>
                    <h3>User: {user?.displayName}</h3>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
            {/* <div>
                <h3>User: {user?.displayName}</h3>
            </div> */}
        </div>
    );
};

export default Login;