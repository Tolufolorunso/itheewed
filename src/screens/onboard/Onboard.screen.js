import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { colors } from '../../constants/colors';

export function OnboardScreen({ navigation }) {
  return (
    <Onboarding
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.replace('Login')}
      pages={[
        {
          backgroundColor: colors.primaryClr,
          title: '',
          subtitle: '',
          image: (
            <View>
              <Text style={styles.text}>Tolu</Text>
              <Text>Tolu</Text>
              <Image source={require('../../../assets/favicon.png')} />
            </View>
          ),
          titleStyles: { color: 'red' },
        },
        {
          backgroundColor: colors.primaryClr,
          title: '',
          subtitle: '',
          image: (
            <View>
              <Text>Tolu</Text>
              <Text>Tolu</Text>
              <Image source={require('../../../assets/favicon.png')} />
            </View>
          ),
          titleStyles: { color: 'green' },
        },
        {
          backgroundColor: colors.primaryClr,
          title: '',
          subtitle: '',
          image: (
            <View>
              <Text>Tolu</Text>
              <Text>Tolu</Text>
              <Image source={require('../../../assets/favicon.png')} />
            </View>
          ),
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.primaryClr,
  },
});
