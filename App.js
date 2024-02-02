import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { DATA } from './Data'
import Row from './components/Row'
import Search from './components/Search'
import Add from './components/Add'
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@persons.key'

export default function App() {
  const [items, setItems] = useState([])
  const [selectedId, setSelectedId] = useState(null)

  // Initialize
  useEffect(() => {
    setItems(DATA)
    getData()
  }, [])

  // Gets all the data from Data.js, NOT the items state variable
  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search))
    setItems(searchArray)
  }

  // Used to identify a specific row by it's id
  // Passed to Row component
  const select = (id) => {
    setSelectedId(id)
  }

  // Get data from memory
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY)
      const json = JSON.parse(value)
      if (json === null) {
        json = []
      }
      //console.log(json)
      setItems(json)
    } catch (ex) {
      console.log(ex)
    }
  }

  // Stores data in memory when new person is added
  const storeData = async(value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue)
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <Add items={items} setItems={setItems} storeData={storeData} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        renderItem={({ item }) => (
          <Row person={item} selectedId={selectedId} select={select} />
        )}
      >
      </FlatList>
    </SafeAreaView>
  );
}

// Different solutions for rendreing list-items
/*
function renderItem({item}){
  return (<Text>{item.lastname}</Text>)

}
*/

/*
const renderItem = ({ item }) => (
  <Text>{item.lastname}</Text>
)
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 64
  }
});
