import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import _map from 'lodash.map';

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

        
        console.log(detail);

        return (
            <View style={styles.container}>
                <Text>123</Text>
                <Text>도시 이름 : {detail.name}</Text>
                <Text>도시 습도 : {detail.dt}</Text>
                <Text>{detail.base}</Text>
                <Text>시계 : {detail.visibility}</Text>
                <Text>{detail.dt}</Text>
            

                <Text>날씨 : {detail.weather[0].main}</Text>
                <Text>{detail.weather[0].description}</Text>
                <Text>{detail.weather[0].icon}</Text>

                <Text>온도 : {detail.main.temp}</Text>
                <Text>{detail.main.pressure}</Text>
                <Text>{detail.main.humidity}</Text>
                <Text>최고온도 : {detail.main.temp_min}</Text>
                <Text>최저온도 : {detail.main.temp_max}</Text>
                <Text>풍속 : {detail.wind.speed}</Text>
                <Text>{detail.wind.deg}</Text>
                <Text>{detail.clouds.all}</Text>
                <Text>국가 : {detail.sys.country}</Text>
                <Text>{detail.sys.message}</Text>
                <Text>{detail.sys.sunrise}</Text>
                <Text>{detail.sys.sunset}</Text>
                
              
                
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
});