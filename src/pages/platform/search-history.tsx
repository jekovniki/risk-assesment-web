import styled from "@emotion/styled";
import { format, isToday } from "date-fns";
import DefaultLayout from "../../features/platform/common/containers/layout";
import { useSearchHisory } from "../../features/platform/search/api/use-search-history";
import OppositeContentTimeline from "../../features/platform/search/components/search-timeline";
import { useGetUser } from "../../services/users";

const SearchHistory = () => {
    const { isLoading, error, data }: { isLoading: boolean, error: any, data: any } = useGetUser();
    const email = data && data.email ? data.email : "";
    const searchHistory = useSearchHisory();
    const latestSearch = searchHistory.data?.data as any[] || [];
    const separatedArrays = [] as any;
    latestSearch.forEach((obj: any) => {
        const createdAtDate = new Date(obj.createdAt._seconds * 1000);
        const formattedDate = isToday(createdAtDate) ? "Today" : format(createdAtDate, 'dd MMM yyyy');
        const formattedTime = format(createdAtDate, 'hh:mm a');
        let found = false;
        separatedArrays.forEach((day: any) => {
            if (day.name === formattedDate) {
                day.items.push({...obj, time: formattedTime});
                day.items.sort((a: any, b: any) => b.createdAt._seconds - a.createdAt._seconds);
                found = true;
            }
        });
        if (!found) {
            separatedArrays.push({ name: formattedDate, items: [{ ...obj, time: formattedTime }] });
        }
    });

    return (
        <DefaultLayout title="Search History" email={email}>
            <div style={{
                height: "93vh",
                overflowY: "scroll"
            }}>
            {
                latestSearch.length ? separatedArrays.map((search: any) => 
                <Wrapper>
                    <OppositeContentTimeline day={search.name} items={search.items}/>
                </Wrapper>) : 
                <Wrapper>
                    No search history is available
                </Wrapper>
            }
            </div>
            

        </DefaultLayout>
    )
}

const Wrapper = styled.div`
    margin-left: auto;
    color: #333;
    padding-top: .5rem;
    padding-left: .5rem;
`;

export default SearchHistory;