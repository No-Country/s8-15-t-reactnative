import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({

    buttomText: (name, activeTab) => ({
        color: name === activeTab ? colors.azul_oscuro : colors.gris_oscuro,
        fontFamily: 'roboto-medium'
    }),
    underline: (name, activeTab) => ({
        opacity: name === activeTab ? 1 : 0,
        backgroundColor: name === activeTab ? colors.azul_oscuro : colors.gris_oscuro,
        height: 3,
        width: '90%',
        bottom: 0,
    }),
})