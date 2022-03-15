import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultsList";

const searchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errMessage] = useResults();


    const filterResultsByPrice = (price) => {
        return results.filter( result => {
            return result.price === price;
        });
    };
    
    return <View style={{ flex: 1, }}>
        <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}/>
        {errMessage ? <Text>{errMessage}</Text> : null}
        <Text style={{marginLeft: 15}}>We have found {results.length} results</Text>
        <ScrollView>
            <ResultList results={filterResultsByPrice('$')} title="Cost Effective" />
            <ResultList results={filterResultsByPrice('$$')} title="Bit Pricier" />
            <ResultList results={filterResultsByPrice('$$$')} title="Big Spender!"/>
        </ScrollView>
       
    </View>
};


const styles = new StyleSheet.create({

});

export default searchScreen;


