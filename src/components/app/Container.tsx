import { View, Text } from 'react-native'
import React from 'react'

interface IProps {
    children: React.ReactNode
}
export default function Container({ children }: IProps) {
    return (
        <View className=' bg-slate-900'>
            {children}
        </View>
    )
}