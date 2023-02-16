import React,{useState} from 'react';
import 
  {View,
   Text, 
   StyleSheet, 
   TouchableOpacity,
   TextInput,
  FlatList,
Keyboard} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {  FontAwesome } from '@expo/vector-icons'
import Tarefa from './src/Tarefa'


export default function App(){


  const [tarefa, setTarefa] = useState('');

  const [list, setList] = useState([]);
/*
  const [curso, setCurso] = useState(null);

  const armazenar = (chave, valor)=>{
    AsyncStorage.setItem(chave, valor)
  }

  const buscar = async (chave) =>{
    const valor = await AsyncStorage.getItem(chave)
    setCurso(valor);
  }

  armazenar('01', 'teste 1')
  armazenar('02', 'teste 2')
  armazenar('03', 'teste 3')

  buscar ('03')
  */

  function handleAdd(){
    if(tarefa === ''){
      return;
    }

    const dados = {
      key:Date.now(),
      item:tarefa
    }
 

    //pega todos os dados que estão no array e adiciona a tarefa nova
    setList(oldArray => [dados, ...oldArray])
    setTarefa('')
    Keyboard.dismiss();

  }

  function handleDelete(item){
    let filtroItem = list.filter((tarefa) => {
      return (tarefa.item !== item)
    })

    setList(filtroItem)
  }


  return(
    
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      
      <View style={styles.containerInput}>
        <TextInput
        placeholder="Digite sua tarefa"
        style={styles.input}
        value={tarefa}
        onChangeText={(text) => setTarefa(text)}
        />
        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd} >
          <FontAwesome name='plus' size={20} color="#22272e"/>
        </TouchableOpacity>
      </View>

      <FlatList
        data={list}
        keyExtractor={(item)=> item.key}
        renderItem={({item})=> <Tarefa data={item} deleteItem={()=>handleDelete(item.item)}/> }
        style={styles.list}
  />

      {/*<Text>Curso teste {curso}</Text>*/}
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#22272e',
    paddingTop:28
  },
  title:{
    fontWeight:'bold',
    fontSize:24,
    color:'#fff',
    marginTop:'5%',
    marginStart: '5%',
    marginBottom:12
  },
  containerInput:{
    flexDirection:'row',
    width:'100%',
    height:44,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:22, 
  },
  input:{
    width:'75%',
    backgroundColor:'#fbfbfb',
    height:44,
    borderRadius:6,
    paddingHorizontal:8,
  },
  buttonAdd:{
    width:'15%',
    height:44,
    backgroundColor:'#rgba(0, 196, 196, 0.4)',
    marginLeft:8,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8,

  },
  list:{
    flex:1,
    backgroundColor:'#22272e',
    padding:'4%',
    borderRadius:8
  }
})
