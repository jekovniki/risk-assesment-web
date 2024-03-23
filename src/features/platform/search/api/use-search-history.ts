import { useQuery } from "react-query"
import { SearchQueryKeys } from "./query-keys"
import { getSearchHistory } from "../../../../services/search"

export function useSearchHisory() {
    return useQuery({
        queryKey: SearchQueryKeys.History,
        queryFn: getSearchHistory
    })
}