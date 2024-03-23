import { SearchQueryKeys } from "./query-keys";
import { search } from "../../../../services/search";
import { useMutation, useQueryClient } from "react-query";

export function useSearch() {
    const client = useQueryClient();

    return useMutation({
        mutationFn: search,
        onSuccess: () => client.invalidateQueries(SearchQueryKeys.History)
    })
}