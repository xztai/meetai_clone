"use client"

import { useQuery } from "@tanstack/react-query"
import { useTRPC } from "@/trpc/client"

export function HomeView() {
  const trpc = useTRPC()
  const { data } = useQuery(trpc.hello.queryOptions({ text: "daun" }))

  return <div className="flex flex-col p-4 gap-y-4">{data?.greeting}</div>
}
