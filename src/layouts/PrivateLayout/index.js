import { LOCAL_STORAGE_KEYS } from "../../utils/constants";
import Storage from "../../utils/storage";
import { useNavigate } from "react-router-dom";

function PrivateLayout({ children }) {
    const isLoggedIn = Storage.get(LOCAL_STORAGE_KEYS.LOGGED_IN);
    const navigate = useNavigate();
    // if (!isLoggedIn) {
    //     navigate("/");
    // }
    return (
        <div>
            { children }
        </div>
    )
}

export default PrivateLayout;