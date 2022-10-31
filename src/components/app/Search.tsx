import React from 'react'
import { View, TextInput, Text, Pressable } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useFormik } from 'formik'

export default function Search() {

    const filter = () => {
        console.log('entro');
        console.log(formik.values)
    }
    const formik = useFormik({
        initialValues: {
            search: '',
        },
        onSubmit: (values) => {
        },
    })
    return (
        <View className=' mx-10 flex-row rounded-lg shadow-2xl  border border-violet-500 justify-between items-center'>
            <TextInput
                className='  p-2 w-3/4 text-violet-500'
                placeholder='Search'
                value={formik.values.search}
                onChangeText={formik.handleChange('search')}
            />
            <Pressable onPress={filter}>
                <FontAwesome
                    name='search'
                    size={20}
                    color='#8b5cf6'

                />

            </Pressable>
        </View>
    )
}