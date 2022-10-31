import React from 'react'
import { Datum } from '../../redux/slices/filter.slice'
import { Text, View, Image, ImageBackground, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

interface IProps {
    item: Datum
}
export const Thumb = ({ item }: IProps) => {
    const navigation = useNavigation()


    return (
        <Pressable className='m-3 rounded-md'
            onPress={() => navigation.navigate('Details', { item })}>


            <ImageBackground
                source={{ uri: item?.attributes?.posterImage.small }}
                className='w-48 h-64 rounded-lg'


            >
                <View className='bg-slate-800/30 h-full justify-end'>
                    <Text className='text-white font-bold mb-5 ml-1'>{item?.attributes?.canonicalTitle}</Text>
                </View>
            </ImageBackground>

        </Pressable>

    )
}