import React from 'react'
import { Pressable, Text, StyleSheet, Dimensions } from 'react-native'

export default function Row({ person, selectedId, select }) {
    const backgroundColor = person.id === selectedId ? '#c0c0c0' : '#f5f5f5'

    return (
        <Pressable style={styles.rowContainer} onPress={() => select(person.id)}>
            <Text
                style={[styles.row, { backgroundColor }]}>
                {person.lastname}, {person.firstname}
            </Text>
        </Pressable>
    )
}

var width = Dimensions.get('window').width;

const styles = StyleSheet.create (({
    rowContainer: {
        width: width*0.9,
    },
    row: {
        padding: 16,
        marginBottom: 8
    }
}))
