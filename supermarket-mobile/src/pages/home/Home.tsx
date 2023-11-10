import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ScrollView, Text, View, ToastAndroid } from 'react-native'
import { Button, Card } from 'react-native-elements'

const products =[
  {name: "Sapato", price: "R$ 300,00", descripition: "Sapato de marca", image:"https://static.netshoes.com.br/produtos/tenis-asics-gel-impression-11-masculino/72/2FW-0179-172/2FW-0179-172_detalhe1.jpg?ts=1695700246?ims=240x240", discount:"R$ 200,00 no Pix"},
  {name: "Sapato", price: "R$ 300,00", descripition: "Sapato de marca", image:"https://static.netshoes.com.br/produtos/tenis-asics-gel-impression-11-masculino/72/2FW-0179-172/2FW-0179-172_detalhe1.jpg?ts=1695700246?ims=240x240", discount:"R$ 200,00 no Pix"},
  {name: "Sapato", price: "R$ 300,00", descripition: "Sapato de marca", image:"https://static.netshoes.com.br/produtos/tenis-asics-gel-impression-11-masculino/72/2FW-0179-172/2FW-0179-172_detalhe1.jpg?ts=1695700246?ims=240x240", discount:"R$ 200,00 no Pix"},
  {name: "Sapato", price: "R$ 300,00", descripition: "Sapato de marca", image:"https://static.netshoes.com.br/produtos/tenis-asics-gel-impression-11-masculino/72/2FW-0179-172/2FW-0179-172_detalhe1.jpg?ts=1695700246?ims=240x240", discount:"R$ 200,00 no Pix"},
  {name: "Sapato", price: "R$ 300,00", descripition: "Sapato de marca", image:"https://static.netshoes.com.br/produtos/tenis-asics-gel-impression-11-masculino/72/2FW-0179-172/2FW-0179-172_detalhe1.jpg?ts=1695700246?ims=240x240", discount:"R$ 200,00 no Pix"},
  {name: "Sapato", price: "R$ 300,00", descripition: "Sapato de marca", image:"https://static.netshoes.com.br/produtos/tenis-asics-gel-impression-11-masculino/72/2FW-0179-172/2FW-0179-172_detalhe1.jpg?ts=1695700246?ims=240x240", discount:"R$ 200,00 no Pix"},
]
const Home = () => {
  return (
    <ScrollView>
      <StatusBar backgroundColor='black'/>
     {
      products.map((product, i) => {
        const openToast = (message) =>{
          ToastAndroid.show(message, 3000)
        }
        return(
        <Card key={i}>
          <Card.Title> <Text style={{fontSize:24}}>{product.name}</Text></Card.Title>
          <Card.Divider/>
          <Card.Image source={{uri: product.image}}/>
          <View style={{marginBottom:"5%", marginTop:"5%"}}>
            <Text style={{textDecorationLine: "line-through",color:"#848484"}}>{product.price} </Text>
            <Text style={{fontSize: 16}}>{product.discount}</Text> 
          </View> 
            <Button onPress={() => {openToast("Item adicionado com sucesso!")}} title='Adicionar ao carrinho'></Button>  
        </Card>
        )
        })
     }
    </ScrollView>
  );
}

export default Home