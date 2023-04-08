import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
        <TopHomeBar></TopHomeBar>
        <View style={{paddingVertical:10}}></View>
        <SuggestedCar></SuggestedCar>
    </View>
  );
}

const TopHomeBar = () =>
{
    return(
    <View style = {styles.TopHomeBarStyle}>
        <View style = {{flexDirection:'row'}}>
            <Image source={require('../assets//info.png')}></Image>
            <View style={{width:15}}></View>
            <Text style = {styles.headTextH2}>Information</Text>
        </View>
        <View style = {{flexDirection:'row'}}>
            <Image source={require('../assets//bell.png')}></Image>
            <View style={{width:15}}></View>
            <Text Text style = {styles.headTextH2}>Notification</Text>
        </View>
    </View>
    )
}

const SuggestedCar = () =>{
    return(
        <View style={styles.suggestedCarStyle}>
            <Text style = {styles.desciptionTextH1}>NEAREST CAR</Text>
            <Image source={require('../assets/carImage.png')}></Image>
            <Text style = {styles.headTextH1}>Fortuner GR</Text>
            <View style = {{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <View style = {{
                    flexDirection: 'row'
                }}>
                    <View style = {{flexDirection:'row'}}>
                        <Image source={require('../assets/distance.png')}></Image>
                        <Text style={styles.desciptionTextH2}>{' >'}870km</Text>
                    </View>
                    <View style={{width:20}}></View>
                    <View style = {{flexDirection:'row'}}>
                        <Image source={require('../assets/fuel.png')}></Image>
                        <Text style={styles.desciptionTextH2}> 50L</Text>
                    </View>
                </View>
                <Text style={styles.headTextH2}>$ 45.00/h</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    TopHomeBarStyle:{
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headTextH1:{
        fontSize: 20,
        fontWeight: 600,
        fontStyle: 'normal',
        tintColor: '#2C2B34'
    },
    headTextH2:{
        fontSize: 16,
        fontWeight: 600,
        tintColor: '#000000'
    },
    headTextH3:{
        fontSize: 14,
        fontWeight: 600,
        tintColor: '#000000'
    },
    desciptionTextH1:{
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 400,
        tintColor: '#787878'
    },
    desciptionTextH2:{
        fontSize: 12,
        fontWeight:400,
        fontStyle: 'normal',
        tintColor: '#787878'
    },
    desciptionTextH3:{

    },
    suggestedCarStyle:{
        height:'60%',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    }
});