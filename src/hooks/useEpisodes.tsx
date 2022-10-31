import React from 'react'
import { httpClient } from '../api/httpClient'

export const useEpisodes = (id: string, type: string) => {
    const [episodes, setEpisodes] = React.useState<Datum[]>()
    const [loading, setLoading] = React.useState<boolean>(true)

    const getEpisodes = async () => {
        if (type === 'anime') {
            const { data } = await httpClient.get(`/anime/${id}/episodes`)
            setEpisodes(data?.data)
            setLoading(false)


        } else {
            const { data } = await httpClient.get(`/chapters/${id}`)
            console.log(data)
            setEpisodes(data?.data)
            setLoading(false)
        }

    }


    React.useEffect(() => {
        getEpisodes()
    }, [])

    return { episodes, loading }
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
    type: Type;
}

export interface Attributes {
    airdate: Date;
    canonicalTitle: string;
    createdAt: Date;
    description: string;
    length: number;
    number: number;
    relativeNumber: number;
    seasonNumber: number;
    synopsis: string;
    thumbnail: Thumbnail;
    titles: Titles;
    updatedAt: Date;
}

export interface Thumbnail {
    meta: ThumbnailMeta;
    original: string;
}

export interface ThumbnailMeta {
    dimensions: Dimensions;
}

export interface Dimensions {
}

export interface Titles {
    en_jp: string;
    en_us: string;
    ja_jp: string;
}

export interface DatumLinks {
    self: string;
}

export interface Relationships {
    media: Media;
    videos: Media;
}

export interface Media {
    links: MediaLinks;
}

export interface MediaLinks {
    related: string;
    self: string;
}

export enum Type {
    Episodes = "episodes",
}

export interface RootObjectLinks {
    first: string;
    last: string;
    next: string;
}

export interface RootObjectMeta {
    count: number;
}
