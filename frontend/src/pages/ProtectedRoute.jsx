import { Outlet,Navigate } from "react-router"
import { useSelector } from "react-redux";

 const ProtectedRoute = () => {
    const user = useSelector((state) => state.auth?.user?.user)
    // console.log(user)
    return(
        <div>
        {user ? <Outlet /> : <Navigate to="/sign-in" replace />}
        </div>

    )
}

export default ProtectedRoute;