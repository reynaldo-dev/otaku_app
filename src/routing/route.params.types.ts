import { Datum } from "../redux/slices/filter.slice";

export type RootStackParamList = {
    Home: undefined;
    Details: { item : Datum } | undefined;
    Favorites: undefined;
  };