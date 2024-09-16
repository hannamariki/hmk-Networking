
import { useState } from 'react';
import { StyleSheet, TextInput, View, Button, ActivityIndicator } from 'react-native';
import RepoTable from './RepoTable'
import { fetchRepositories } from './api';

export default function App() {
  const [keyword, setKeyword] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);


  const handleFetch = () => {
    setLoading(true);
    setRepositories([]);

     fetchRepositories(keyword) 
    .then(data => setRepositories(data.items))
    .catch(error => console.log(error))
    .finally(() => setLoading(false)); 
  };
  

  return (
      <View style={styles.container}>
        <TextInput 
          style={{fontSize: 18, width: 200, marginTop: 30}} 
          placeholder='keyword' 
          value={keyword}
          onChangeText={text => setKeyword(text)} 
        />
         <Button title="Find" onPress={handleFetch} />

         {loading && <ActivityIndicator size="large" />}

          

         <RepoTable repositories={repositories} />

       
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
