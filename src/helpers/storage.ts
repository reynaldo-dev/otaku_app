import AsyncStorage from "@react-native-async-storage/async-storage"
import { Datum } from "../redux/slices/filter.slice"


export const isFavorite = (id : string, favorites : Datum[]) => {
    return favorites.some((item : Datum) => item?.id === id);
   
}

export const toggleFavorite = async (item : Datum, isFavorite : boolean) => {
    const actualStorage = await AsyncStorage.getItem('favorites' || '[]')
    const actualStorageParsed = JSON.parse(actualStorage || '[]')
    await AsyncStorage.removeItem('favorites')

    if(isFavorite){
        const newStorage = [...actualStorageParsed, item]
        await AsyncStorage.setItem('favorites', JSON.stringify(newStorage))
    }else{
        const index = actualStorageParsed.findIndex((i : Datum) => i?.id === item?.id);
        console.log(index)
        actualStorageParsed.splice(index, 1);
        await AsyncStorage.setItem('favorites', JSON.stringify(actualStorageParsed))
    }
}

export const getFavorites = async () => {
    const actualStorage = await AsyncStorage.getItem('favorites' || '[]')
    const actualStorageParsed = JSON.parse(actualStorage || '[]')
    return actualStorageParsed
}