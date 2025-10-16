import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase/config";
import { setUser } from "../features/auth/authSlice";
import Login from "../pages/Login";

const ProtectedRout = ({ Component }) => {
    const { user } = useSelector((state) => state.user);
    console.log(user);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(
                    setUser({
                        uid: user.uid,
                        email: user.email,
                        username: user.displayName,
                        userphoto: user.photoURL,
                    })
                );
            }
        });

        return () => unsubscribe();
    }, []);


    if (!user) {
        return <Login />;
    }

    return <Component />;
};

export default ProtectedRout;
