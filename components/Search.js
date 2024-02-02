import { TextInput, View, StyleSheet, Dimensions } from "react-native";
import React, { useState } from 'react'

export default function Search({executeSearch}){
    const [search, setSearch] = useState("")

    return (
        <View style={styles.searchBox}>
            <TextInput
            value={search}
            onChangeText={text => setSearch(text)}
            placeholder="Search..."
            returnKeyType="search"
            onSubmitEditing={() => executeSearch(search)}
            />
        </View>
    )
}

var width = Dimensions.get('window').width;

const styles = StyleSheet.create ({
    searchBox: {
        marginTop: 24,
        marginRight: 24,
        marginBottom: 24,
        marginLeft: 24,
        borderColor: '#333',
        borderWidth: 1,
        padding: 8,
        width: width*0.9
    }
})