import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Datum } from '../../redux/slices/filter.slice'
import { Thumb } from '../Thumbnail/Thumb'

interface IProps {
    data: Datum[]
}
export const ItemList = ({ data }: IProps) => {
    return (
        <FlatList
            horizontal
            data={data}
            renderItem={({ item }) => (
                <Thumb item={item} />
            )}
            className='mt-5 p-1'
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}

        />
    )
}