import { useState } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import Registro from './Registro/Registro'
import Profile from './Profile'

const Home = () => {
    const [loading, setLoading] = useState(false);
    return (
        <View>        
            
            <Registro />
        </View>
    )
}

export default Home
