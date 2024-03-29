/* eslint-disable react/prop-types */
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import RegistroFormulario from './RegistroFormulario'

const SplashMessageRegistro = ({
    title,
    description1,
}) => {
    return (
        
        <View
            className='mt-auto items-center  bg-white h-3/4'
            style={{
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                fontFamily: 'poppins-regular',
            }}
        >
            <SafeAreaView>
                <ScrollView>
                        <View className='mt-20 items-center px-2'>
                            <Text className='text-2xl' style={{ 
                                        fontFamily: 'poppins-medium', 
                                        color: "#383081", 
                                        fontSize: 20,
                                        lineHeight: 30,
                                        fontWeight: "600",
                                        textAlign: "center"
                                        }}>
                                {title}
                            </Text>

                            <Text
                                className='mt-8'
                                style={{
                                    fontFamily: 'poppins-regular',
                                    fontSize: 16,
                                    lineHeight: 24,
                                    textAlign: 'center',
                                    fontWeight: '400',
                                    color: "#383081"
                                }}
                            >
                                {description1}
                            </Text>
                            
                            <RegistroFormulario />                            
                        </View>
                </ScrollView>
            </SafeAreaView>
        </View>
        
    
    )
}

export default SplashMessageRegistro
