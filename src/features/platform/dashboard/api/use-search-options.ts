import { useQuery } from "react-query"
import { SearchQueryKeys } from "./query-keys"
import { getSearchOptionsEntities, getSearchOptionsGender } from "../../../../services/search"

export function useSearchOptionsGender() {
    return useQuery({
        queryKey: SearchQueryKeys.Options.Genders,
        queryFn: getSearchOptionsGender
    })
}

export function useSearchOptionsEntities() {
    return useQuery({
        queryKey: SearchQueryKeys.Options.Entities,
        queryFn: getSearchOptionsEntities
    })
}
