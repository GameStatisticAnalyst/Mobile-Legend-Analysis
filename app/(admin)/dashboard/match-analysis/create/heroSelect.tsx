import { useState } from "react";
import Button from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandList, CommandItem } from "@/components/ui/command";
import { Check, ChevronDown } from "lucide-react";

import type { Team, Player, GameEvent, Hero } from "@/types/match-analysis";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function HeroSelect({
  player,
  updateHero,
}: {
  player: Player;
  updateHero: (player: Player, hero: Hero) => void;
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
          {player.hero.name}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search hero..." />
          <CommandEmpty>No hero found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {sampleHeroes.map((hero) => (
                <CommandItem
                  key={hero.id}
                  onSelect={() => {
                    updateHero(player, hero); // Pastikan fungsi ini dipanggil
                    setOpen(false); // Tutup popover setelah memilih
                  }}
                  className="text-sm"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      player.hero.id === hero.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {hero.name}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
