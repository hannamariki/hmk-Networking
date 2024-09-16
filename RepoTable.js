import { FlatList, Text, View } from "react-native";

export default function RepoTable({repositories}){

    return(
        <FlatList
      data={repositories} 
      keyExtractor={(item) => item.id}
      renderItem={({item}) =>
        <View>
          <Text style={{fontSize: 18, fontWeight: "bold"}}>
            {item.full_name}
          </Text>
          <Text style={{fontSize: 16 }}>
            {item.description}
          </Text>
        </View>}
    /> 

    );
}