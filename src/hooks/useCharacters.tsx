import React from 'react'

import { httpClient } from '../api/httpClient'

export const useCharacters = (id: string, type: string) => {

    const [characters, SetCharacters] = React.useState<Datum[]>()
    const [loading, setLoading] = React.useState<boolean>(true)

    const getCharacters = async () => {
        if (type === 'anime') {
            const { data } = await httpClient.get(`/anime-characters/${id}`);
            //SetCharacters(data?.data)
            //setLoading(false)
            console.log(data);
        }
    }

    React.useEffect(() => {
        getCharacters()
    }, [])

    return { characters, loading }


}

export interface RootObject {
    data: Datum[];
    links: RootObjectLinks;
    meta: RootObjectMeta;
}

export interface Datum {
    attributes: Attributes;
    id: string;
    links: DatumLinks;
    relationships: Relationships;
    type: string;
}

export interface Relationships {
    anime: Anime;
    character: {};
    castings: Castings;
}

export interface Anime {
    links: AnimeLinks;
}

export interface Castings {
    links: CastingsLinks;
}

export interface CastingsLinks {
    self: string;
    related: string;
}

export interface AnimeLinks {
    self: string;
    related: string;
}

export interface DatumLinks {
    self: string;
}

export interface Attributes {
    createdAt: Date;
    updatedAt: Date;
    role: string;
}

export interface RootObjectLinks {
    first: string;
    prev: string;
    last: string;
    next: string;
}

export interface RootObjectMeta {
    count: number;
}

