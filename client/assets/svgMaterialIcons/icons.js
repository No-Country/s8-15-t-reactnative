import Svg, { Circle, Rect, Path, ClipPath, Polygon } from 'react-native-svg';

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
        <Svg width={size} height={size} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M20.6389 12.8957H16.5906C15.1042 12.8948 13.8993 11.6909 13.8984 10.2045C13.8984 8.71801 15.1042 7.51409 16.5906 7.51318H20.6389" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M17.0485 10.1428H16.7369" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M6.74766 1.49997H15.3911C18.2892 1.49997 20.6388 3.84948 20.6388 6.74763V13.9247C20.6388 16.8228 18.2892 19.1723 15.3911 19.1723H6.74766C3.84951 19.1723 1.5 16.8228 1.5 13.9247V6.74763C1.5 3.84948 3.84951 1.49997 6.74766 1.49997Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M6.03564 6.03813H11.4346" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}
