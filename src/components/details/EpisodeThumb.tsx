import React from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'

import { Datum } from '../../hooks/useEpisodes'

interface Props {
    episode: Datum
}
export default function EpisodeThumb({ episode }: Props) {
    return (
        <ImageBackground
            source={{ uri: episode?.attributes?.thumbnail?.original }}
            className=' rounded w-32 h-32 mr-3 '
            resizeMode='cover'
        >
            <View className=' items-start h-full justify-end bg-slate-900/30'>
                <Text className='text-white font-bold text-sm'>{episode?.attributes?.titles.en_jp}</Text>
            </View>

        </ImageBackground>
    )
}