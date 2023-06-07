import { Text, View, Image } from 'react-native'
import colors from '../../utils/colors'
import { useFonts } from 'expo-font'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as SplashScreen from 'expo-splash-screen';
import SplashMessageRegistro from './SplashMessageRegistro'


SplashScreen.preventAutoHideAsync();

const Registro = () => {
    const [fontsLoaded] = useFonts({
        'poppins-medium': require('../../../assets/poppinsFonts/Poppins-Medium.ttf'),
        'poppins-regular': require('../../../assets/poppinsFonts/Poppins-Regular.ttf'),
    })
    const navigation = useNavigation()
    const [activeStep, setActiveStep] = useState(0)
    
    const infoSteps = [
        {
            title: 'Es hora de crear tu perfil',
            description1:
                'Crea tu usuario para continuar',   
        }
    ]

    const currentStep = infoSteps[activeStep]

    
    return (
        <View
            
        >
            <LinearGradient
                colors={['#7029E2', '#55B7FF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ height: '100%', width: '100%' }}
            >
            <Image
            source={require('../../../assets/FondoLoginRegistro.png')}
				className='h-[250px] w-full'
				resizeMode='cover'
            />
                <SplashMessageRegistro
                    title={currentStep.title}
                    description1={currentStep.description1}               
                />
                
            </LinearGradient>

        </View>
    )
}

export default Registro
