import React, { useState } from "react";
import { TextInput, Button, View, StyleSheet, Dimensions } from "react-native";

export default function Add({items, setItems, storeData}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const save = () => {
        const newPerson = {
            id: items.length + 1,
            lastname: lastName,
            firstname: firstName
        }
        if (firstName != '' && lastName != ''){
            const tempItems = [...items,newPerson]
            storeData(tempItems)
            setItems(tempItems)
            setFirstName('')
            setLastName('')
        }
    }

    return (
        <View style={styles.addContainer}>
            <TextInput
                value={firstName}
                onChangeText={text => setFirstName(text)}
                placeholder="Firstname..."
            />
            <TextInput
                value={lastName}
                onChangeText={text => setLastName(text)}
                placeholder="Lastname..."
            />
            <Button title="Save" onPress={save} />
        </View>
    )
}

var width = Dimensions.get('window').width;

const styles = StyleSheet.create(({
    addContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        width: width*0.9
    }
}))

