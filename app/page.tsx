import { Filter, ShoppingCart } from "@/components";

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md shadow-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between gap-4 mb-4">
                        <h1 className="text-2xl font-bold text-foreground bg-linear-to-r from-foreground to-muted-foreground bg-clip-text">
                            PhotoStock
                        </h1>
                        <div className="flex items-center gap-2">
                            <Filter />
                            <ShoppingCart />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
