import DefaultLayout from "../../features/platform/common/containers/layout";
import { useGetUser } from "../../services/users";

const SearchHistory = () => {
    const { isLoading, error, data }: {isLoading : boolean, error: any, data: any} = useGetUser();
    const email = data && data.email ? data.email : "";

    return (
        <DefaultLayout title="Search History" email={email}>
            Search History
        </DefaultLayout>
    )
}

export default SearchHistory;