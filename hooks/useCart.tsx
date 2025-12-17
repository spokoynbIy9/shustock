"use client";

import { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "@/store";
import { cartActions, cartSelectors } from "@/store/slices";
import { Good } from "@/types";

export const useCart = () => {
    const dispatch = useAppDispatch();
    const { getGoods, getTotal, getTotalCount } = cartSelectors;

    const goods = useAppSelector(getGoods);
    const total = useAppSelector(getTotal);
    const totalCount = useAppSelector(getTotalCount);

    const addGood = useCallback(
        (good: Omit<Good, "id">) => {
            const entireGood = { id: crypto.randomUUID(), ...good };
            dispatch(cartActions.addGood(entireGood));
        },
        [dispatch],
    );

    const deleteGood = useCallback(
        (goodId: string) => {
            dispatch(cartActions.deleteGood(goodId));
        },
        [dispatch],
    );

    const deleteAllGoods = useCallback(() => {
        dispatch(cartActions.deleteAllGoods());
    }, [dispatch]);

    return {
        goods,
        total,
        totalCount,

        addGood,
        deleteGood,
        deleteAllGoods,
    };
};
