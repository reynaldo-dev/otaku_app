import React from 'react'
import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { RootState, useAppDispatch, useAppSelector } from '../redux/store'
import { filterThunk } from '../redux/thunks/filter.thunk'
import { ItemList } from '../components/app/ItemList'
import Header from '../components/home/Header'
import Container from '../components/app/Container'


export default function Home() {
    const { anime, manga, isLoading } = useAppSelector((state: RootState) => state.filter)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        setTimeout(() => {
            dispatch(filterThunk())
        }, 2000);
    }, [])

    return (

        <SafeAreaView  >
            <Header />
            <View className='h-screen bg-slate-900 pb-10'>
                <ScrollView>
                    {
                        isLoading ?
                            <View className='h-screen bg-slate-900 '>
                                <ActivityIndicator size="large" color="#8b5cf6" />
                            </View>
                            :
                            <Container>
                                {/* animes */}
                                <View className='mx-5 mt-10 '>
                                    <Text className='text-white font-bold text-2xl'>Animes</Text>
                                    <ItemList data={anime} />
                                </View>

                                {/* mangas */}
                                <View className='mx-5 mt-20 mb-20'>
                                    <Text className='text-white font-bold text-2xl'>Mangas</Text>
                                    <ItemList data={manga} />
                                </View>
                            </Container>
                    }
                </ScrollView>
            </View>
        </SafeAreaView>

    )
}