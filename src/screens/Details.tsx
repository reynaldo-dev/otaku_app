import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'



import Container from '../components/app/Container'
import ItemInfo from '../components/details/ItemInfo'
import EpisodesList from '../components/details/EpisodesList'
import { useCharacters } from '../hooks/useCharacters'


export default function Details() {
    const route = useRoute()
    const navigation = useNavigation()
    const { item } = route.params
    const { characters, loading } = useCharacters(item.id, item.type)


    return (
        <SafeAreaView>
            <ScrollView>
                <Container>
                    <View className=''>
                        <FontAwesome
                            name='arrow-left'
                            size={20}
                            color='#8b5cf6'
                            style={{ marginTop: 20, marginLeft: 20 }}
                            onPress={() => navigation.navigate('Home')}
                        />
                    </View>

                    <View className='mb-10'>
                        <ItemInfo item={item} />
                    </View>

                    <View className='mx-3'>
                        {
                            item?.type === 'anime' &&
                            <>
                                <Text className='text-white font-bold text-lg mb-2'>Episodes</Text>
                                <EpisodesList id={item?.id} type={item?.type} />
                            </>
                        }
                    </View>
                </Container>
            </ScrollView>
        </SafeAreaView>
    )
}