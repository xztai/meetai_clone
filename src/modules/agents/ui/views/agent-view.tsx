"use client"

import { useSuspenseQuery } from "@tanstack/react-query"
import EmptyState from "@/components/empty-state"
import ErrorState from "@/components/error-state"
import LoadingState from "@/components/loading-state"
import { useTRPC } from "@/trpc/client"
import { columns } from "../components/columns"
import { DataTable } from "../components/data-table"

export default function AgentsView() {
  const trpc = useTRPC()
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions())

  return (
    <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
      <DataTable data={data} columns={columns} />
      {data.length === 0 && (
        <EmptyState
          title="Create your first agent"
          description="Create an agent to join your meetings.
      Each agents will follow your instructions and can interact with participants during the call."
        />
      )}
    </div>
  )
}

export function AgentsViewLoading() {
  return (
    <LoadingState
      title="Loading Agents"
      description="This may take a few seconds"
    />
  )
}

export function AgentsViewError() {
  return (
    <ErrorState
      title="Failed to load Agents"
      description="Please try again later"
    />
  )
}
