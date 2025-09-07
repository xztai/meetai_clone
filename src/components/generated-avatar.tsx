import { createAvatar } from "@dicebear/core"
import { botttsNeutral, initials } from "@dicebear/collection"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface GeneratedAvatarProps {
  seed: string
  className?: string
  variant: "botttsNeutral" | "initials"
}

export default function generatedAvatar({
  seed,
  className,
  variant,
}: GeneratedAvatarProps) {
  const avatar =
    variant === "botttsNeutral"
      ? createAvatar(botttsNeutral, { seed })
      : createAvatar(initials, {
          seed,
          fontWeight: 500,
          fontSize: 42,
        })

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={avatar.toDataUri()} alt="avatar" />
      <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  )
}
