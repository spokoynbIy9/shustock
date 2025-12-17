"use client";

import { SlidersHorizontal } from "lucide-react";

import { CATEGORIES, ORIENTATIONS } from "@/constants";
import { useFilters } from "@/hooks";
import {
    Badge,
    Button,
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/ui";

export function Filter() {
    const {
        activeFiltersCount,
        selectedCategories,
        selectedOrientations,
        toggleCategory,
        toggleOrientation,
    } = useFilters();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="relative bg-transparent"
                >
                    <SlidersHorizontal className="h-4 w-4" />
                    {activeFiltersCount > 0 && (
                        <Badge
                            variant="destructive"
                            className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 flex items-center justify-center text-[10px]"
                        >
                            {activeFiltersCount}
                        </Badge>
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Категории</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {CATEGORIES.map((category) => (
                    <DropdownMenuCheckboxItem
                        key={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => toggleCategory(category)}
                    >
                        {category}
                    </DropdownMenuCheckboxItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Orientation</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {ORIENTATIONS.map((orientation) => (
                    <DropdownMenuCheckboxItem
                        key={orientation}
                        checked={selectedOrientations.includes(orientation)}
                        onCheckedChange={() => toggleOrientation(orientation)}
                    >
                        {orientation}
                    </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
