import { Album } from "./album";
import { Artist } from "./artist";
import { Playlist } from "./playlist";
import { Song } from "./song";

export interface Collection {
    id: number;
    title: string;
    description: string;
    user_id: number;
    playlist_id?: Playlist[] | Album[] | Artist[] | Song[];
    type_of_collection: number;
    display_at: number;
}