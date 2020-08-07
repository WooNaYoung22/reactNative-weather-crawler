import React from 'react';
import { View, ImageBackground, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SearchBar }  from 'react-native-elements';
import cityListApi from '../api/CityListApi';

export default class CityList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [],
      search: '',
      loading: false,
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
  renderHeader = () => {
    return (
      <SearchBar
        placeholder="도시를 입력하시오..."
        value={this.state.value}
        onChangeText={text => this.searchFilterFunction(text)}
      />
    )
  }
  searchFilterFunction = text => {
    this.setState({
      value: text
    });

    const newData = this.state.cities.filter(city => {
      const cityData = city.toUpperCase();
      const textData = text.toUpperCase();
      return cityData.includes(textData);
    });

    this.setState({
      data: newData
    })
  };

  render() {
    const {search} = this.state;


    return (
      <View>
        <ImageBackground source={require("../image/cityback2.png")} style={styles.bgimage}>
          <View>
            <FlatList style={styles.container}
              numColumns={5}
              renderItem={({ item }) => this.renderItem(item)}
              keyExtractor={item => item}
              data={this.state.data}
              extraData={this.state}
              ListHeaderComponent={this.renderHeader}
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
