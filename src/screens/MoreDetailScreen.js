import React from 'react';
import { StyleSheet, View, Text,ImageBackground } from 'react-native';


export default class MoreDatailScreen extends React.Component {
    
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        const {
            route: {
                params: { detail },
            },
        } = this.props;

    }
    render() {
      
        const {
            route: {
              params: { detail },
            },
            navigation,
          } = this.props;

          navigation.setOptions({ title: '상세정보' });
        
       

        return (
            <View style={styles.container}>
                <ImageBackground style={styles.background} source={require("../image/detailBackground.png")}>
                   
                        <p>도시 이름 : {detail.name}</p>
                        <p>시계 : {detail.visibility}</p>
                        <p>날씨 : {detail.weather[0].main}</p>
                        <p>날씨 상세 : {detail.weather[0].description}</p>
                        <p>온도 : {detail.main.temp}</p>
                        <p>기압 : {detail.main.pressure}</p>
                        <p>습도 : {detail.main.humidity}</p>
                        <p>최고온도 : {detail.main.temp_min}</p>
                        <p>최저온도 : {detail.main.temp_max}</p>
                        <p>풍속 : {detail.wind.speed}</p>
                        <p>국가 : {detail.sys.country}</p>
                        <p>일출 : {detail.sys.sunrise}</p>
                        <p>일몰 : {detail.sys.sunset}</p>
                   
                </ImageBackground>

            </View>
           
                
            
        );

    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    background: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
      },
     
});