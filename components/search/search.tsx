"use client";

import { SearchIcon } from "lucide-react";

import { useFilters } from "@/hooks";
import { Input } from "@/ui";

export function Search() {
    const { search, setSearch } = useFilters();

    return (
        <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
                type="text"
                placeholder="Search high-quality photos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 h-11"
            />
        </div>
    );
}
