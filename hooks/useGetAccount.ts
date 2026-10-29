import { createUseQuery } from "@1adybug/tanstack-query"

import { getAccount } from "@/apis/getAccount"

export const useGetAccount = createUseQuery({
    queryFn: getAccount,
    queryKey: "get-account",
    staleTime: Infinity,
    gcTime: Infinity,
})
