import { useState } from "react";
import Button from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandItem,
} from "@/components/ui/command";
import { Check, ChevronDown } from "lucide-react";

import type { Team, Player, GameEvent, Hero } from "@/types/match-analysis";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function RoleSelect({
  player,
  updateRole,
}: {
  player: Player;
  updateRole: (role: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between h-8 text-xs"
        >
          {player.hero.role}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            {roles.map((role) => (
              <CommandItem
                key={role.id}
                onSelect={() => {
                  updateRole(role.name);
                  setOpen(false);
                }}
                className="text-sm"
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    player.hero.role === role.name ? "opacity-100" : "opacity-0"
                  )}
                />
                {role.name}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
