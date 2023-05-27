import Svg, { Path } from 'react-native-svg';

export function House({ color = '#000', size = '30' }) {
    return (
        <Svg viewBox="0 96 960 960" width={size} height={size}><Path fill={color} d="M160 936V535l-84 64-36-48 120-91V346h60v68l260-198 440 336-36 47-84-64v401H160Zm60-60h230V716h60v160h230V489L480 291 220 489v387Zm-60-580q0-46 32.5-78t77.5-32q21.25 0 35.625-15T320 136h60q0 45-32.083 77.5Q315.833 246 270 246q-20 0-35 14.375T220 296h-60Zm60 580h520-520Z" /></Svg>
    );
}

export function Utensils({ color = '#000', size = '30' }) {
    return (
        <Svg viewBox="0 96 960 960" width={size} height={size}><Path fill={color} d="M285 976V608q-52-11-88.5-52.5T160 456V176h60v280h65V176h60v280h65V176h60v280q0 58-36.5 99.5T345 608v368h-60Zm415 0V656H585V351q0-79 48-127t127-48v800h-60Z" /></Svg>
    )
}

export function Wallet({ color = '#000', size = '30' }) {
    return (
        <Svg width={size} height={size} viewBox="0 0 22 20" fill="none">
            <Path d="M20.6389 12.8957H16.5906C15.1042 12.8948 13.8993 11.6909 13.8984 10.2045C13.8984 8.71801 15.1042 7.51409 16.5906 7.51318H20.6389" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M17.0485 10.1428H16.7369" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M6.74766 1.49997H15.3911C18.2892 1.49997 20.6388 3.84948 20.6388 6.74763V13.9247C20.6388 16.8228 18.2892 19.1723 15.3911 19.1723H6.74766C3.84951 19.1723 1.5 16.8228 1.5 13.9247V6.74763C1.5 3.84948 3.84951 1.49997 6.74766 1.49997Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M6.03564 6.03813H11.4346" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}

export function Book({ color = '#000', size = '30' }) {
    return (
        <Svg width={size} height={size}  viewBox="0 96 960 960" ><Path fill={color} d="M248 756q53.566 0 104.283 12.5T452 806V379q-45-30-97.619-46.5Q301.763 316 248 316q-38 0-74.5 9.5T100 349v434q31-14 70.5-20.5T248 756Zm264 50q50-25 98-37.5T712 756q38 0 78.5 6t69.5 16V349q-34-17-71.822-25-37.823-8-76.178-8-54 0-104.5 16.5T512 379v427Zm-30 90q-51-38-111-58.5T248 817q-36.537 0-71.768 9Q141 835 106 848q-23.1 11-44.55-3Q40 831 40 805V342q0-15 7-27.5T68 295q42-20 87.395-29.5Q200.789 256 248 256q63 0 122.5 17T482 325q51-35 109.5-52T712 256q46.868 0 91.934 9.5Q849 275 891 295q14 7 21.5 19.5T920 342v463q0 27.894-22.5 42.447Q875 862 853 848q-34-14-69.232-22.5Q748.537 817 712 817q-63 0-121 21t-109 58ZM276 567Z"/></Svg>
    )
}
