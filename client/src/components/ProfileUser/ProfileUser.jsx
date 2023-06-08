import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './ProfileUser.styles';
// import { Cloudinary } from 'cloudinary-react-native';
import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage';
import { storage } from '../../firebase/config';

const { width } = Dimensions.get('window');
const AVATAR_SIZE = 85;

export const ProfileUser = ({form1Data,onForm1DataSubmit}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const [imageUrls, setImageUrls] = useState([]);

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    console.log("position scroll",index)
    setCurrentIndex(index);
  };

  const selectAvatar = (index) => {
    console.log("posicion",index)
    setCurrentIndex(index);
    // scrollViewRef.current.scrollTo({ x: width * index, y: 0, animated: true });
  };

  const handleSubmit = () => {
    console.log("posicion image",currentIndex)
    const updatedForm1Data = {...form1Data};
    updatedForm1Data.avatar = imageUrls[currentIndex];
    console.log("imagen seleccionada",imageUrls[currentIndex])
    onForm1DataSubmit(updatedForm1Data);
  };


  useEffect(() => {
    const fetchImages = async () => {
      try {
        const storageRef = ref(storage); // Obtener referencia a la raíz del almacenamiento

        const imagesRef = ref(storageRef, 'avatar-user'); // Cambia 'your-folder-name' por el nombre de tu carpeta en Firebase Storage

        const imageList = await listAll(imagesRef); // Obtener la lista de imágenes en la carpeta

        const urls = await Promise.all(imageList.items.map(async (itemRef) => {
          const downloadUrl = await getDownloadURL(itemRef); // Obtener la URL de descarga de cada imagen
          return downloadUrl;
        }));

        // console.log("imagenes storage",urls)
        setImageUrls(urls);
      } catch (error) {
        console.error('Error al obtener las imágenes de Firebase Storage:', error);
      }
    };

    fetchImages();

  }, []);


  return (
    <View style={styles.carouselContainer}>
      <Text style={styles.labelMain}>Personalizar Perfil</Text>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {imageUrls.map((imageUrl, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => selectAvatar(index)}
            activeOpacity={0.8}
          >
            <Image
              source={{ uri: imageUrl }}
              style={[
                styles.avatar,
                {
                  marginRight: index === imageUrls.length - 1 ? (width - AVATAR_SIZE) / 2 : 0,
                  opacity: index === currentIndex ? 1 : 0.5
                }
              ]}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.labelTitle}>
        <Text style={styles.labelInfo}>Podés elegir un avatar</Text>
        <Text style={styles.labelInfo}>para personalizar tu perfil o</Text>
        <Text style={styles.labelInfo}>agregar una fotografía propia</Text>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.buttonTransparent} onPress={handleSubmit}>
          <Text style={styles.textButtonTransparent}>Añadir Fotografía</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};