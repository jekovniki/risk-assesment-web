import { CasesQueryKeys } from "./query-keys";
import { resolveCase } from "../../../../services/case";
import { useMutation, useQueryClient } from "react-query";

export function useResolveCase() {
    const client = useQueryClient();

    return useMutation({
        mutationFn: resolveCase,
        onSuccess: () => client.invalidateQueries(CasesQueryKeys.All)
    })
}