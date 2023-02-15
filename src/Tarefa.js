import React from "react";
import {Text,View, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesome} from '@expo/vector-icons'

export default function Tarefa({data, deleteItem}){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <FontAwesome name="trash" size={20} color="#22272e" onPress={deleteItem}/>
            </TouchableOpacity>
            <Text>{data.item}</Text>
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        backgroundColor:'rgba(0, 0, 0, 0.4)',
        marginTop:12,
        padding:12,
        borderRadius:8,
        flexDirection:'row'
    },
    button:{
        marginRight:10
    }
})