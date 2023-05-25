import React from 'react';
import { Text, View } from 'react-native';
import { CommonTitle } from '../CommonTitle';
import { CryptoListItem } from '../CryptoListItem';

const ListaCrypto = () => {
	return <View className='px-5' >
		<CommonTitle text='Tu billetera'/>
		<View>
			<CryptoListItem coin='Bitcoin' amountOwned={0.00004235} inUsd={11.46} profit={0.17} />
			<CryptoListItem coin='Bitcoin' amountOwned={0.004235} inUsd={11.46} profit={0.17} />
			<CryptoListItem coin='Bitcoin' amountOwned={0.00004235} inUsd={11.46} profit={0.17} />
			<CryptoListItem coin='Bitcoin' amountOwned={0.0004235} inUsd={11.46} profit={0.17} />
		</View>
	</View>;
};

export default ListaCrypto;
