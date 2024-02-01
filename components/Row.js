import React from 'react'
import { Text } from 'react-native'

export default function Row({person}) {
    return (
        <Text>
            <Text>{person.name} </Text>
        </Text>
    )
}
