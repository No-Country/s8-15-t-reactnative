import { Text, View, Image } from 'react-native'
import colors from '../../utils/colors'
import { useFonts } from 'expo-font'
import { LinearGradient } from 'expo-linear-gradient'
import { useCallback } from 'react'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as SplashScreen from 'expo-splash-screen';
import SplashMessageLogin from './SplashMessageLogin'
import { Divider } from 'react-native-material-ui'
import { styles } from '../HeaderHistorial/headerHistorial.styles'

SplashScreen.preventAutoHideAsync();

const Login = () => {
    const [fontsLoaded] = useFonts({
        'poppins-medium': require('../../../assets/poppinsFonts/Poppins-Medium.ttf'),
        'poppins-regular': require('../../../assets/poppinsFonts/Poppins-Regular.ttf'),
    })
    const navigation = useNavigation()
    const [activeStep, setActiveStep] = useState(0)
    
    const infoSteps = [
        {
            title: '¡Hola de vuelta!',
            description1:
                'Entrá a tu perfil nuevamente',   
        }
    ]

    const currentStep = infoSteps[activeStep]

    
    return (
        <View>
            <LinearGradient
                colors={['#7029E2', '#55B7FF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ height: '100%', width: '100%' }}
            >
            <Image
            source={require("../../Images/OBJECTS.png")}
            resizeMode='contain'
            />
                <SplashMessageLogin
                    title={currentStep.title}
                    description1={currentStep.description1}               
                />
                <Divider style={styles.divider}/>
            </LinearGradient>

        </View>
    )
}

export default Login