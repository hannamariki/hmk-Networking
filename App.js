import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default function App() {
  const [keyword, setKeyword] = useState('');
  const [repositories, setRepositories] = useState([]);


  const handleFetch = () => {
    fetch(`https://api.github.com/search/repositories?q=${keyword}`)
    .then(response => {
      if(!response.ok){
        throw new Error('Error in fetch: status code ${response.status} ${response.statusText}');
      }
      return response.json();
    })
    .then(data => console.log(data.items))
    .catch(error => console.log(error));
  }

    return (
      <View style={styles.container}>
        <TextInput 
          style={{fontSize: 18, width: 200}} 
          placeholder='keyword' 
          value={keyword}
          onChangeText={text => setKeyword(text)} 
        />
        <Button title="Find" onPress={handleFetch} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
