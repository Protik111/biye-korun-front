import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useProtectedRoute = (route = "/login") => {
    const { isAuthenticated } = useSelector(state => state.auth);

    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push(route)
            return;
        }
        setIsLoading(true)
    }, [])

    return { isLoading }

}

export default useProtectedRoute;