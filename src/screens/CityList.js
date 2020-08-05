import React from 'react';
import { View, ImageBackground, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import cityListApi from '../api/CityListApi';

export default class CityList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [],
    };
  }

  componentDidMount() {
    cityListApi.fetchAvailableCities()
      .then(cities => {
        this.setState({
          cities
        });
      });
  }

  onPressCity(item) {
    console.log('onPressCity =', item);
    this.props.navigation.navigate('Detail', {
      city: item
    });
  }

  renderItem(city) {
    return (
      <TouchableOpacity style={styles.item} onPress={() => this.onPressCity(city)}>
        <Text style={styles.text}>{city}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View>
        <ImageBackground source={require("../image/cityback2.png")} style={styles.bgimage}>
          <View>
            <FlatList style={styles.container}
              numColumns={3}
              renderItem={({ item }) => this.renderItem(item)}
              keyExtractor={item => item}
              data={this.state.cities}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  item: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
  },
  bgimage: {
    width: '100%',
    height: '100%',
  }
});
