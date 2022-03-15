import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import ResultDetail from "./ResultDetail";


const ResultList = ({title, results, navigation}) => {
    if (!results.length){
        return null;
    }
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={{marginLeft: 15}}>Results: {results.length}</Text>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({item}) => {
            return (<TouchableOpacity onPress={() => navigation.navigate('Result', { id: item.id  })}>
                    <ResultDetail result={item}/>
                </TouchableOpacity>);
        }}/>
    </View>
}

const styles = StyleSheet.create({
    title: {
        marginLeft: 15,
        marginBottom: 5,
        fontSize: 18,
        fontWeight: 'bold'
    },
    container: {
        marginBottom: 10
    }
});


export default withNavigation(ResultList);