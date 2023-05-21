import { useEffect } from 'react'
import { Animated, View,Easing,Text } from 'react-native'

import Logo from '../assets/billeteras.png'

export default function SplashScreen({ navigation }) {

    const logoOpacity = new Animated.Value(0); // Valor inicial de la opacidad del logo
    const logoPosition = new Animated.Value(-200); // Valor inicial de la posición del logo
	useEffect(() => {
		animateLogo() // Llamada a la función de animación cuando el componente se monta
	}, [])

	const animateLogo = () => {
        Animated.parallel([
            Animated.timing(logoOpacity, {
              toValue: 1, // Valor final de la opacidad del logo (completamente visible)
              duration: 1500, // Duración de la animación en milisegundos
              useNativeDriver: true, // Utilizar el controlador nativo de animaciones
            }),
            Animated.timing(logoPosition, {
              toValue: 0,
              duration: 1500,
              easing: Easing.linear,
              useNativeDriver: true,
            }),
        ]).start(() => {
            setTimeout(() => {
                navigation.replace('Home');
            }, 1500);
		}) // Iniciar la animación
	}

	return (
		<View style={styles.container}>
			<Animated.Image
				source={Logo}
				style={[styles.logo, { 
                    opacity: logoOpacity,// Aplicar la opacidad animada al estilo del logo
                    transform: [{ translateY: logoPosition }],
                }]}
			/>
             <Animated.Text
                style={[styles.text,{
                    opacity: logoOpacity,
                    transform: [{ translateX: logoPosition }],
                }]}
            >
                ¡Bienvenido!
            </Animated.Text>
		</View>
	)
}

const styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#0043fc',
	},
	logo: {
		width: 150,
		height: 150,
	},
    text: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color:'white'
    },
}
