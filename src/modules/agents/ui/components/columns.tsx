"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { CornerDownRight, VideoIcon } from "lucide-react"
import GeneratedAvatar from "@/components/generated-avatar"
import { Badge } from "@/components/ui/badge"
import type { AgentGetOne } from "../../types"

export const columns: ColumnDef<AgentGetOne>[] = [
  {
    accessorKey: "name",
    header: "Agent name",
    cell: ({ row }) => (
      <div className="flex flex-col gap-y-1">
        <div className="flex items-center gap-x-2">
          <GeneratedAvatar
            variant="botttsNeutral"
            seed={row.original.name}
            className="size-6"
          />
          <span className="font-semibold capitalizy">{row.original.name}</span>
        </div>
        <div className="flex items-center gap-x-2">
          <CornerDownRight className="size-3 text-muted-foreground" />
          <span className="text-sm text-muted-foreground max-w-[200px] truncate capitalize">
            {row.original.instructions}
          </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "meetingCount",
    header: "Meetings",
    cell: ({ row }) => (
      <Badge
        variant={"outline"}
        className="flex items-center gap-x-2 [&svg]:size-4"
      >
        <VideoIcon className="text-blue-700" />5 meetings
      </Badge>
    ),
  },
]
