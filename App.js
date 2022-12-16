import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  ImageBackground,
  Text,
  View,
} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const App = () => {
  const [text, onChangeText] = React.useState("");
  const Tab = createMaterialBottomTabNavigator();
  const image = { uri: "https://inspiring.beltim.go.id/uploads/wisata/original/underwater%20-%20pulau%20bukulimau%201.jpg" };
  const image1 = { uri: "https://theworldtravelguy.com/wp-content/uploads/2020/08/DSCF3834_1200.jpg" };
  const image2 = { uri: "https://t-2.tstatic.net/medan/foto/bank/images/Patung-Dewi-Kwan-Im-tutup-saat-imlek.jpg" };
  const image3 = { uri: "https://wisato.id/wp-content/uploads/2019/10/64726683_135966537605799_7485743941205203893_n-1068x801.jpg" };
  const image4 = { uri: "https://inspiring.beltim.go.id/uploads/wisata/original/pantai%203.jpg" };

  return(
    <SafeAreaView>
      <ScrollView>
      <View style={styles.all}>
      <View style={styles.header}>
        <View style={styles.flogo}></View>
        <TextInput style={styles.input} onChangeText={onChangeText} value={text} placeholder="Cari Wisata"/>
        <View style={styles.flogo}></View>
      </View>
      <View style={{ height: 300, flex: 1 }}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={{ color: 'white', marginBottom: 2 }}>Wisata Air</Text>
          <Text style={{ color: 'white', fontSize: 28 }}>Pulau Bukulimau Underwater</Text>
        </ImageBackground>
      </View>
      <View style={{ marginTop: 8 }}>
      <Text style={{ fontSize: 18, textAlign: 'center' }}>Destinasi Wisata</Text>
      <Text style={{ fontSize: 11, textAlign: 'center' }}>Pilihan Terbaik</Text></View>
      <View style={{ flex: 1, flexDirection: "row", padding: 5 }}>
        <View style={styles.pilihan}>
        <ImageBackground source={image1} resizeMode="cover" style={styles.imageCover}>
          <Text style={{ color: 'white'}}>Pantai Serdang</Text>
        </ImageBackground>
        </View>
        <View style={styles.pilihan}>
        <ImageBackground source={image2} resizeMode="cover" style={styles.imageCover}>
          <Text style={{ color: 'white'}}>Vihara Patung Dewi Kwan Im</Text>
        </ImageBackground>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row", padding: 5 }}>
        <View style={styles.pilihan}>
        <ImageBackground source={image3} resizeMode="cover" style={styles.imageCover}>
          <Text style={{ color: 'white'}}>Replika SD Laskar Pelangi</Text>
        </ImageBackground>
        </View>
        <View style={styles.pilihan}>
        <ImageBackground source={image4} resizeMode="cover" style={styles.imageCover}>
          <Text style={{ color: 'white'}}>Pantai Nyiur Melambai</Text>
        </ImageBackground>
        </View>
      </View>
        <View style={{ alignItems: 'center' }}><Text>Lihat Lainnya</Text></View>
      </View>
      <View style={styles.tabnav}>
        <View style={styles.flogo}></View>
        <View style={styles.flogo}></View>
        <View style={styles.flogo}></View>
        <View style={styles.flogo}></View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  all:{
    flex: 1,
  },
  pilihan:{
    flex: 1,
    height: 180,
    width: 90,
    borderRadius: 20,
    justifyContent: 'flex-end',
    margin: 10,
  },
  header:{
    height: 50,
    width: '100%',
    marginTop: 5,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  flogo:{ 
    height: 40,
    width: 40,
    margin: 10,
    borderWidth: 1,
    borderRadius: 20,
    flex: 0.18,
  },
  input:{
    borderRadius: 20,
    height: 40,
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
    fontFamily: 'arial',
  },
  imageCover:{
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
    fontFamily: 'arial',
    borderRadius: 20,
    overflow: 'hidden'
  },
  tabnav:{
    height: 60,
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'red',

  }
});

export default App;
