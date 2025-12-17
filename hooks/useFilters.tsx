"use client";

import { useCallback, useMemo } from "react";

import { useAppDispatch, useAppSelector } from "@/store";
import { filtersActions, filtersSelectors } from "@/store/slices";
import { Category, Orientation } from "@/types";

export const useFilters = () => {
    const dispatch = useAppDispatch();
    const selectedCategories = useAppSelector(
        filtersSelectors.getSelectedCategories,
    );
    const selectedOrientations = useAppSelector(
        filtersSelectors.getSelectedOrientations,
    );

    const activeFiltersCount = useMemo(
        () => selectedCategories.length + selectedOrientations.length,
        [selectedCategories.length, selectedOrientations.length],
    );

    const toggleCategory = useCallback(
        (category: Category) =>
            dispatch(filtersActions.toggleCategory(category)),
        [dispatch],
    );

    const toggleOrientation = useCallback(
        (orientation: Orientation) =>
            dispatch(filtersActions.toggleOrientation(orientation)),
        [dispatch],
    );

    return {
        selectedCategories,
        selectedOrientations,
        activeFiltersCount,

        toggleCategory,
        toggleOrientation,
    };
};
