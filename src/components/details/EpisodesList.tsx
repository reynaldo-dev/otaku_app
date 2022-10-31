import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Attributes, Datum, useEpisodes } from '../../hooks/useEpisodes'
import EpisodeThumb from './EpisodeThumb'

interface Props {
    id: string;
    type: string;
}
export default function EpisodesList({ id, type }: Props) {
    const { episodes, loading } = useEpisodes(id, type)



    return (
        <FlatList
            data={episodes}
            horizontal
            keyExtractor={(item: Datum) => item?.id}
            renderItem={({ item }: { item: Datum }) => (
                <EpisodeThumb episode={item} />
            )}
            centerContent
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            contentContainerStyle={{ marginBottom: 10 }}

        />
    )
}