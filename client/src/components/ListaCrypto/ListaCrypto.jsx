import React from 'react'
import { View } from 'react-native'
import { CommonTitle } from '../CommonTitle'
import { CryptoListItem } from '../CryptoListItem'
import { myCryptos } from '../../utils/fakeCryptoData'
import { ButtonsCryptoScreen } from '../ButtonsCryptoScreen'
import { useNavigation } from '@react-navigation/native'

const ListaCrypto = () => {
	const navigation = useNavigation()

	return (
		<View className='px-5 relative'>
			<View className=' flex justify-center w-full mb-[70px]'>
				<View className='flex flex-row justify-evenly w-full  absolute top-[-40px]'>
					<ButtonsCryptoScreen texto='Transferir' onPress={() => navigation.navigate('CryptoTransferencia')}/>
					<ButtonsCryptoScreen texto='Cambiar'
						onPress={() => navigation.navigate('CryptoCambio')}
						/>
					<ButtonsCryptoScreen
						texto='Métrica'
						onPress={() => navigation.navigate('CryptoMetric')}
					/>
				</View>
			</View>
			<CommonTitle text='Tu billetera' />
			<View>
				{myCryptos.map(coin => (
					<CryptoListItem
						key={coin.id}
						coin={coin.coin}
						coinSymbol={coin.symbol}
						amountOwned={coin.amount}
						inUsd={coin.actualValue}
						profit={coin.modifiedPercentage}
						icon={coin.imgIcon}
					/>
				))}
			</View>
		</View>
	)
}

export default ListaCrypto
