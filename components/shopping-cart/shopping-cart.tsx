"use client";

import Image from "next/image";
import { ShoppingCartIcon, Trash2 } from "lucide-react";

import { useCart } from "@/hooks";
import { useAppSelector } from "@/store";
import { authorsSelectors } from "@/store/slices";
import {
    Badge,
    Button,
    ScrollArea,
    Separator,
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/ui";

export function ShoppingCart() {
    const { goods, total, totalCount, deleteGood, deleteAllGoods } = useCart();

    const getAuthorById = useAppSelector(authorsSelectors.getAuthorById);

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="relative gap-2 bg-transparent"
                >
                    <ShoppingCartIcon className="h-4 w-4" />
                    {totalCount > 0 && (
                        <Badge
                            variant="destructive"
                            className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
                        >
                            {totalCount}
                        </Badge>
                    )}
                </Button>
            </SheetTrigger>

            <SheetContent className="w-full sm:max-w-lg flex flex-col p-0">
                <SheetHeader className="p-6 pb-4">
                    <SheetTitle className="flex items-center justify-between">
                        <span>Shopping Cart</span>
                        {totalCount > 0 && (
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={deleteAllGoods}
                                className="text-muted-foreground hover:text-destructive"
                            >
                                Clear all
                            </Button>
                        )}
                    </SheetTitle>
                </SheetHeader>

                {totalCount === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                        <div className="rounded-full bg-muted p-6 mb-4">
                            <ShoppingCartIcon className="h-12 w-12 text-muted-foreground" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                            Your cart is empty
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Add some amazing photos to get started!
                        </p>
                    </div>
                ) : (
                    <>
                        <ScrollArea className="flex-1 px-6">
                            <div className="space-y-4 pb-4">
                                {goods.map((good) => (
                                    <div
                                        key={good.id}
                                        className="flex gap-4 group"
                                    >
                                        <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-muted shrink-0">
                                            <Image
                                                src={
                                                    good.image ||
                                                    "/placeholder.svg"
                                                }
                                                alt={good.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-medium text-sm truncate mb-1">
                                                {good.title}
                                            </h4>
                                            <p className="text-xs text-muted-foreground mb-2">
                                                by{" "}
                                                {
                                                    getAuthorById(good.authorId)
                                                        ?.name
                                                }
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <span className="font-semibold text-lg">
                                                    ${good.price}
                                                </span>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity hover:text-destructive"
                                                    onClick={() =>
                                                        deleteGood(good.id)
                                                    }
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>

                        <div className="border-t p-6 space-y-4 bg-background">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-muted-foreground">
                                        Subtotal
                                    </span>
                                    <span className="font-medium">
                                        ${total}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-muted-foreground">
                                        Items
                                    </span>
                                    <span className="font-medium">
                                        {totalCount}
                                    </span>
                                </div>
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-semibold">
                                    Total
                                </span>
                                <span className="text-2xl font-bold">
                                    ${total}
                                </span>
                            </div>
                            <Button
                                className="w-full h-12 text-base font-semibold"
                                size="lg"
                            >
                                Proceed to Checkout
                            </Button>
                        </div>
                    </>
                )}
            </SheetContent>
        </Sheet>
    );
}
