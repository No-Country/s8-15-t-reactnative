import React from 'react';
import { View } from 'react-native';
import { CommonTitle } from '../CommonTitle';
import { CryptoListItem } from '../CryptoListItem';
import { myCryptos } from '../../utils/fakeCryptoData';

const ListaCrypto = () => {


	return <View className='px-5' >
		<CommonTitle text='Tu billetera'/>
		<View>
			{myCryptos.map((coin) => (
				<CryptoListItem key={coin.id} coin={coin.coin} coinSymbol={coin.symbol} amountOwned={coin.amount} inUsd={coin.actualValue} profit={coin.modifiedPercentage}
					icon={coin.imgIcon}
				/>

			))}
		</View>
	</View>;
};

export default ListaCrypto;
