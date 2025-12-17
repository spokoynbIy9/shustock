import { Author } from "./author";

export interface Good {
    id: string;
    title: string;
    authorId: Author["id"];
    price: number;
    image: string;
}
