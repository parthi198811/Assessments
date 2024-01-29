import React, {useState} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import ItemComponent from './ItemComponent';

const HomeScreen = props => {
  const {navigation} = props;
  const [modalVisible, setModalVisible] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [age, setAge] = useState('');
  const [density, setDensity] = useState('');
  const [radius, setRadius] = useState('');
  const [image, setImage] = useState('');

  const AddRecordScreen = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerContent}>New Record</Text>
          </View>
          <View>
            <Text style={styles.label}>Name:</Text>
            <TextInput
              style={styles.textinput}
              placeholder="Name"
              value={name}
              onChangeText={value => {
                setName(value);
              }}
            />
            <Text style={styles.label}>Description:</Text>
            <TextInput
              style={[styles.textinput, {height: 60}]}
              placeholder="Description"
              value={description}
              multiline={true}
              onChangeText={value => {
                setDescription(value);
              }}
            />
            <Text style={styles.label}>Age:</Text>
            <TextInput
              style={styles.textinput}
              placeholder="Age"
              value={age}
              onChangeText={value => {
                setAge(value);
              }}
            />
            <Text style={styles.label}>Density:</Text>
            <TextInput
              style={styles.textinput}
              placeholder="Density"
              value={density}
              onChangeText={value => {
                setDensity(value);
              }}
            />
            <Text style={styles.label}>Radius:</Text>
            <TextInput
              style={styles.textinput}
              placeholder="Radius"
              value={radius}
              onChangeText={value => {
                setRadius(value);
              }}
            />
            <Text style={styles.label}>Image:</Text>
            <TextInput
              style={styles.textinput}
              placeholder="Image URL"
              value={image}
              onChangeText={value => {
                setImage(value);
              }}
            />

            <View style={styles.submitContainer}>
              <TouchableOpacity style={styles.cancel} onPress={handleCancel}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  const handleSubmit = () => {
    const newData = {
      id: listData.length + 1,
      name: name,
      description: description,
      age: age,
      density: density,
      radius: radius,
      image: image,
    };

    setListData([newData, ...listData]);

    setName('');
    setDescription('');
    setAge('');
    setDensity('');
    setRadius('');
    setImage('');

    Alert.alert('Record added successfully.');
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const data = [
    {
      id: 1,
      name: 'Mercury',
      description:
        'Mercury is the first planet from the Sun and the smallest in the Solar System.',
      age: '4.503 billion years',
      density: '5.43 g/cm³',
      radius: '2,439.7 km',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg',
    },
    {
      id: 2,
      name: 'Venus',
      description:
        'Venus is the second planet from the Sun. It has the densest atmosphere of all rocky bodies in the Solar System, so dense that at surface level and 92 atmospheres, it is a supercritical fluid.',
      age: '4.503 billion years',
      density: '5.24 g/cm³',
      radius: '6,051.8 km',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Venus_-_December_23_2016.png/220px-Venus_-_December_23_2016.png',
    },
    {
      id: 3,
      name: 'Earth',
      description:
        'Earth is the third planet from the Sun and the only astronomical object known to harbor life.',
      age: '4.543 billion years',
      density: '5.51 g/cm³',
      radius: '6,371 km',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/cb/The_Blue_Marble_%28remastered%29.jpg',
    },
    {
      id: 4,
      name: 'Mars',
      description:
        'Mars is the fourth planet from the Sun. The surface of Mars is orange-red because it is covered in iron(III) oxide dust, giving it the nickname "the Red Planet".',
      age: '4.603 billion years',
      density: '3.93 g/cm³',
      radius: '3,389.5 km',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/0/0c/Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png',
    },
    {
      id: 5,
      name: 'Jupiter',
      description:
        'Jupiter is the fifth planet from the Sun and the largest in the Solar System.',
      age: '4.603 billion years',
      density: '1.33 g/cm³',
      radius: '69,911 km',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/c1/Jupiter_New_Horizons.jpg',
    },
    {
      id: 6,
      name: 'Saturn',
      description:
        'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter.',
      age: '4.503 billion years',
      density: '687 kg/m³',
      radius: '58,232 km',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg',
    },
    {
      id: 7,
      name: 'Uranus',
      description:
        'Uranus is the seventh planet from the Sun. It is a gaseous cyan-coloured ice giant.',
      age: '4.503 billion years',
      density: '1.27 g/cm³',
      radius: '25,362 km',
      image: 'https://images-assets.nasa.gov/image/PIA18182/PIA18182~orig.jpg',
    },
    {
      id: 8,
      name: 'Neptune',
      description:
        'Neptune is the eighth and farthest planet from the Sun. It is the fourth-largest planet in the Solar System by diameter, the third-most-massive planet, and the densest giant planet.',
      planet_size: '49244 km',
      age: '4.503 billion years',
      density: '1.64 g/cm³',
      radius: '24,622 km',
      image:
        'https://science.nasa.gov/wp-content/uploads/2023/09/PIA01492-1.jpg',
    },
  ];
  const [listData, setListData] = useState(data);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerContent}>Solar System</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={listData}
          renderItem={({item, index}) => {
            return (
              <ItemComponent
                item={item}
                handleItemPress={item => {
                  navigation.navigate('Details', item);
                }}
              />
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={[styles.buttonText, {color: 'black'}]}>New Record</Text>
        </TouchableOpacity>
      </View>

      {AddRecordScreen()}
    </SafeAreaView>
  );
};

export default HomeScreen;
