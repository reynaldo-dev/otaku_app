import { createSlice } from "@reduxjs/toolkit";
import { filterThunk } from "../thunks/filter.thunk";

const initialState : RootObject = {
    isLoading: true,
    anime: [],
    manga: []
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(filterThunk.fulfilled, (state, {payload}) => {
            state.anime = payload.anime;
            state.manga = payload.manga;
            state.isLoading = false;
        });
    }
})

export default filterSlice.reducer;



export interface RootObject {
    isLoading : boolean;
    anime:  Datum[];
    manga: Datum[];
   }
   
   export interface Datum {
    attributes:    Attributes;
    id:            string;
    links:         DatumLinks;
    relationships: { [key: string]: Relationship };
    type:          TypeEnum;
   }
   
   export interface Attributes {
    abbreviatedTitles:   string[];
    ageRating:           AgeRating;
    ageRatingGuide:      string;
    averageRating:       string;
    canonicalTitle:      string;
    coverImage:          CoverImage | null;
    coverImageTopOffset: number;
    createdAt:           Date;
    description:         string;
    endDate:             Date;
    episodeCount:        number;
    episodeLength:       number | null;
    favoritesCount:      number;
    nextRelease:         null;
    nsfw:                boolean;
    popularityRank:      number;
    posterImage:         PosterImage;
    ratingFrequencies:   { [key: string]: string };
    ratingRank:          number;
    showType:            ShowTypeEnum;
    slug:                string;
    startDate:           Date;
    status:              Status;
    subtype:             ShowTypeEnum;
    synopsis:            string;
    tba:                 null | string;
    titles:              Titles;
    totalLength:         number;
    updatedAt:           Date;
    userCount:           number;
    youtubeVideoId:      string;
   }
   
   export enum AgeRating {
    PG = "PG",
    R = "R",
   }
   
   export interface CoverImage {
    large:    string;
    meta:     CoverImageMeta;
    original: string;
    small:    string;
    tiny:     string;
   }
   
   export interface CoverImageMeta {
    dimensions: Dimensions;
   }
   
   export interface Dimensions {
    large:   Large;
    medium?: Large;
    small:   Large;
    tiny:    Large;
   }
   
   export interface Large {
    height: number;
    width:  number;
   }
   
   export interface PosterImage {
    large:    string;
    medium:   string;
    meta:     CoverImageMeta;
    original: string;
    small:    string;
    tiny:     string;
   }
   
   export enum ShowTypeEnum {
    Movie = "movie",
    Tv = "TV",
   }
   
   export enum Status {
    Finished = "finished",
   }
   
   export interface Titles {
    en?:    string;
    en_jp:  string;
    en_us?: string;
    ja_jp:  string;
   }
   
   export interface DatumLinks {
    self: string;
   }
   
   export interface Relationship {
    links: RelationshipLinks;
   }
   
   export interface RelationshipLinks {
    related: string;
    self:    string;
   }
   
   export enum TypeEnum {
    Anime = "anime",
   }
   
   export interface RootObjectLinks {
    first: string;
    last:  string;
    next:  string;
   }
   
   export interface RootObjectMeta {
    count: number;
   }
   