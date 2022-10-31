import { View, Text } from 'react-native'
import React from 'react'
import Search from '../app/Search'

export default function Header() {
    return (
        <View className=' p-4  bg-slate-900 '>
            <Search />
        </View>
    )
}