import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpClient } from "../../api/httpClient";
import { Datum } from "../slices/filter.slice";

interface Filter {
    query : string;
}

interface ReturnPayload {
    anime : Datum[];
    manga : Datum[];
}
export const filterThunk = createAsyncThunk(
    "filter/fetchFilter",
    async (payload : Filter = {query : ''}) => {
        let returnPayload : ReturnPayload = {
            anime : [],
            manga : []
        }

        if (payload.query.length > 0) {
            const animes = await httpClient.get("/trending/anime");
            const mangas = await httpClient.get("/trending/manga");
            console.log('animes', animes.data);
            console.log('mangas', mangas.data);
            
             returnPayload  = {
                anime: animes?.data?.data,
                manga: mangas?.data?.data
            }
            return returnPayload;
        }

        const animes = await httpClient.get("/trending/anime");
        const mangas = await httpClient.get("/trending/manga");
         returnPayload = {
            anime: animes?.data?.data,
            manga: mangas?.data?.data
        }

        return returnPayload;
       
    }
)