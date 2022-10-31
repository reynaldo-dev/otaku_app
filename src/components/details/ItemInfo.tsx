import React from 'react'
import { View, Text, ImageBackground, ScrollView, Pressable } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import YoutubePlayer from "react-native-youtube-iframe";


import { Datum } from '../../redux/slices/filter.slice'
import { useNavigation } from '@react-navigation/native'
import { isFavorite } from '../../helpers/storage'
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store'
import { toggleFavorite } from '../../redux/slices/favorites.slice'
interface ItemInfoProps {
    item: Datum
}
export default function ItemInfo({ item }: ItemInfoProps) {
    const [toggleFavs, setToggleFavs] = React.useState<boolean>(false)
    const [toggleVideo, setToggleVideo] = React.useState<boolean>(false)

    const { favorites } = useAppSelector((state: RootState) => state.favorites)
    const navigation = useNavigation()
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        const isFav = isFavorite(item?.id, favorites)
        setToggleFavs(isFav)

    }, [])

    const handleToggleFavorite = () => {
        setToggleFavs(!toggleFavs)
        dispatch(toggleFavorite({ toggle: !toggleFavs, item }))
    }




    return (
        <View className='mt-10  items-center'>

            {
                toggleVideo ?
                    <View className='w-full justify-center items-center'>
                        <YoutubePlayer
                            height={300}
                            width={500}
                            play={true}
                            videoId={item?.attributes?.youtubeVideoId}
                        />
                    </View>
                    :

                    <ImageBackground
                        source={{ uri: item?.attributes?.posterImage?.small }}
                        className='w-full h-96 rounded-lg'
                        resizeMode='contain'
                    >
                    </ImageBackground>
            }
            <View className='mt-5 justify-center items-center'>
                <Text className='text-lg  text-violet-500 mb-2'>{item?.attributes?.canonicalTitle}</Text>
                {
                    item?.type === 'anime' &&
                    <Pressable className='my-2 flex-row items-center gap-x-2'
                        onPress={() => setToggleVideo(!toggleVideo)}
                    >
                        <FontAwesome

                            name={toggleVideo ? 'stop-circle' : 'play-circle'}
                            size={20}
                            color='#8b5cf6'
                        />
                        <Text className='text-white font-bold text-sm'>{toggleVideo ? 'Stop Trailer' : 'Play Trailer'}</Text>
                    </Pressable>
                }
                <Text className='text-sm text-gray-500 mb-2'>{`${item?.attributes?.startDate ? item?.attributes?.startDate?.toString() : '-'} - ${item?.attributes?.endDate ? item?.attributes?.endDate?.toString() : '-'}`}</Text>

                <Text className='text-gray-500 mb-2'>
                    {item?.attributes?.averageRating}
                    {
                        item?.attributes?.averageRating &&
                        <FontAwesome
                            name='star'
                            size={15}
                            color='#8b5cf6'
                        />
                    }
                </Text>

                <Text className='text-gray-500 mb-5'>{item?.attributes?.ageRatingGuide}</Text>

                <View className='w-full  flex-row items-center gap-x-28'>
                    <Pressable
                        className='bg-violet-500/40 px-3 py-1 rounded-lg'
                        onPress={() => navigation.navigate('Favorites')}
                    >
                        <Text className='text-white font-bold text-sm'>Go to favorites</Text>
                    </Pressable>

                    <Pressable
                        onPress={handleToggleFavorite}>
                        <FontAwesome
                            name='heart'
                            size={20}
                            color={toggleFavs ? '#8b5cf6' : '#fff'}
                        />
                    </Pressable>
                </View>

                <Text className='text-gray-500 text-justify mx-2 mt-5'>{item?.attributes?.synopsis}</Text>
            </View>
        </View>
    )
}