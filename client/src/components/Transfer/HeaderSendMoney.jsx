import { useState, useEffect  } from 'react';
import { View, Text, Image, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Entypo } from '@expo/vector-icons';
import FindContacts from '../../components/Transfer/FindContacts';
//import waveImage from '../../../assets/whiteLinesSvg/wave.js';
//import { SvgXml } from 'react-native-svg';

//const waveSvg = waveImage;

const HeaderSendMoney = ({ setIsSelected }) => {

    const [ value, setValue ] = useState('');

 /*   const [svgXml, setSvgXml] = useState('');

    useEffect(() => {
        setSvgXml(waveSvg);
    }, []);*/

    return (
        <LinearGradient
            colors={['#7029E2', '#55B7FF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{height: 150, width: '100%' }}
            className='rounded-bl-[36px] rounded-br-[36px] flex-row items-center justify-between p-4 relative z-30'
        >
            {/*<View className='w-screen h-full absolute top-[50]'>
                svgXml !== '' && <SvgXml xml={svgXml} width='100%' height={100} />
            </View>*/}
            <Text><AntDesign name="bells" size={20} color="white" /></Text>
            <Text className='text-[22px] text-white font-semibold'>Enviar dinero</Text>
            <Image className='bg-slate-100 w-[40px] h-[40px] rounded-full border-[2px] border-white' source={''}/>
            <View className='justify-center items-center absolute bottom-[-25] inset-x-0'>
                <TextInput
                    className={`w-[328px] h-[56px] bg-white p-5 border-[1px] border-[#CAC4D0] ${value === ''? 'rounded-[28px]' : 'rounded-tl-[28px] rounded-tr-[28px]'}`}
                    placeholder='Nombre/Cbu/Alias'
                    value={value}
                    onChangeText={(text)=> setValue(text)}
                />
                <View className='absolute right-[60] top[50%] z-60 transform -translate-y-[-12]'>
                    <Entypo name="magnifying-glass" size={20} color="black" />
                </View>
                <FindContacts value={value} setIsSelected={setIsSelected} setValue={setValue}/>
            </View>
        </LinearGradient>
    );
};

export default HeaderSendMoney;