import React, {useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const resultsScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, [])

    if (!result) {
        return null;
    }
    return (<View>
        <Text>{result.name}</Text>
        <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item}) => {
            return <Image  style={style.ImageStyle}source={{ uri: item}} />
        }}

        />
    </View>
    );
};

const style = StyleSheet.create({
    ImageStyle: {
        height: 200,
        width: 300
    }
});


export default resultsScreen;