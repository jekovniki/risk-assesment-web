import DefaultLayout from "../../features/platform/common/containers/layout";
import { useGetUser } from "../../services/users";

const Profile = () => {
    const { isLoading, error, data }: {isLoading : boolean, error: any, data: any} = useGetUser();
    const email = data && data.email ? data.email : "";

    return (
        <DefaultLayout title="Profile" email={email}>
            Profile
        </DefaultLayout>
    )
}

export default Profile;