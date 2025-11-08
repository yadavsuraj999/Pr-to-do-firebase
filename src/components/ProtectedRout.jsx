import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase/config";
import { setUser } from "../features/auth/authSlice";
import Login from "../pages/Login";
import { load } from "../features/todo/todoSlice";
import { Flag } from "lucide-react";

const ProtectedRout = ({ Component }) => {
    const { user } = useSelector((state) => state.user);
    const { isLoading } = useSelector((state) => state.todo)

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
            dispatch(load(false))
        });

        return () => unsubscribe();
    }, []);

    if (isLoading) {
        return <div className="h-screen flex justify-center items-center text-4xl font-bold">
            loading....
        </div>
    }

    if (!user) {
        return <Login />;
    }

    return <Component />;
};

export default ProtectedRout;
