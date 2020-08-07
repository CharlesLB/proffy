import React from "react";
import { View, ImageBackground, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import giveClassesBackground from "../../assets/images/give-classes-background.png";

function GiveClasses() {
    const { goBack } = useNavigation();

    function handleNavigateBack() {
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                resizeMode="contain"
                source={giveClassesBackground}
                style={styles.content}
            >
                <Text style={styles.title}>Quer se um Proffy?</Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como professor na
                    nossa plataforma web.
                </Text>
            </ImageBackground>

            <RectButton style={[styles.button]} onPress={handleNavigateBack}>
                <Text style={styles.buttonText}>Tudo bem</Text>
            </RectButton>
        </View>
    );
}

export default GiveClasses;
