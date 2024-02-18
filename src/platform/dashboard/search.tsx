import DefaultLayout from "./containers/layout";
import { useGetUser } from "../../app/services/users";

const Search = () => {
    const { isLoading, error, data }: {isLoading : boolean, error: any, data: any} = useGetUser();
    const email = data && data.email ? data.email : "";

    return (
        <DefaultLayout title="Search" email={email}>
            Search
        </DefaultLayout>
    )
}

export default Search;