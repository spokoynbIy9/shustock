import { Author } from "./author";

export interface Good {
    id: string;
    title: string;
    authorName: Author["id"];
    price: number;
    image: string;
}
