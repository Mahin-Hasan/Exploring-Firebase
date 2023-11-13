import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";
const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSingIn = () =>{
        signInWithPopup(auth,provider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log('Error', error.message);
        })
    }


    return (
        <div>
            <button onClick={handleGoogleSingIn}>Google Log in</button>
        </div>
    );
};

export default Login;