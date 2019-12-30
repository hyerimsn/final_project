import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image  } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import DetailHeader from '../components/DetailHeader'
import NullPage from '../components/NullPage'

const { width, height } = Dimensions.get('window')

export default class DetailScreen extends React.Component {
    
    static navigationOptions =  {
        tabBarIcon: ({ tintColor }) => (
            <MaterialCommunityIcons name="book-open-page-variant" size={30} color={tintColor}/>
      ) 
    }

    post = this.props.navigation.getParam('post')
    
    
    _deletesignal = () =>{
        this.props.navigation.navigate('MainScreen', {signal:this.post.id})
    }


    render(){
        return (
            // console.log(this.post),
            // console.log("Deatial"),
            // console.log(this.props.navigation),
            <SafeAreaView style={styles.container}>
                <DetailHeader deleteProp={this._deletesignal}/>
                {this.post?
                    <View >
                        <View style = {styles.detailbox}>
                            <Text style = {styles.detailtitle}>
                                제목 : {this.post.title}
                            </Text>
                        </View>
                        {this.post.imageUrl ? <Image source={{ uri: this.post.imageUrl }} style={{ width: 100, height: 100 }} /> : null}

                        <View style={styles.detailbox}> 
                            <Text style={styles.detailcontent}>
                                내용 : {this.post.content}
                            </Text>
                        </View>
                       
                    </View>
                    :<NullPage/>
                }
               
            </SafeAreaView>
        );

    }
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       paddingTop:50,
    },
    textstyle: {
        fontSize: 40,
    },

    detailbox :{
        marginVertical:30,
        marginLeft : 30,
        borderLeftColor: 'grey',
        borderLeftWidth:5,
        paddingLeft:20,
    },
    detailtitle:{
        fontSize: 40,
    },
    detailcontent:{
        fontSize : 20,
    },
});
