import React from 'react'
import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons'


import Container from '../components/app/Container'
import { useNavigation } from '@react-navigation/native'
import { ItemList } from '../components/app/ItemList'
import { RootState, useAppSelector } from '../redux/store'
import { Datum } from '../redux/slices/filter.slice'

export default function Favorites() {
    const navigation = useNavigation()
    const { favorites } = useAppSelector((state: RootState) => state.favorites)
    return (
        <SafeAreaView>
            <View className='h-screen bg-slate-900'>
                <Container>
                    <View className='flex-row items-center p-5 gap-x-5 '>
                        <FontAwesome
                            name='arrow-left'
                            size={20}
                            color='#8b5cf6'
                            onPress={() => navigation.goBack()}
                        />
                        <Text className='text-white font-bold text-lg'>Favorites</Text>
                    </View>
                    <ScrollView className='mb-32'>
                        {
                            favorites.length > 0 ?
                                <View className='' >
                                    <View className='mt-8 ml-10' >
                                        <Text className='text-white font-bold text-lg'>Anime</Text>
                                        <ItemList
                                            data={favorites.filter(item => item?.type === 'anime')}
                                        />
                                    </View>

                                    <View className='mt-8 ml-10 mb-10' >
                                        <Text className='text-white font-bold text-lg'>Manga</Text>
                                        <ItemList
                                            data={favorites.filter((item: Datum) => item?.type === 'manga')}
                                        />
                                    </View>
                                </View>
                                :
                                <View className='h-screen flex items-center '>
                                    <FontAwesome
                                        name='exclamation-triangle'
                                        size={50}
                                        color='#8b5cf6'
                                    />
                                    <Text className='text-violet-500 font-bold text-lg self-center'>No favorites yet</Text>
                                </View>
                        }
                    </ScrollView>
                </Container>
            </View>
        </SafeAreaView>
    )
}