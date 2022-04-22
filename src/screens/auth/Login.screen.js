import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import { colors } from '../../constants/colors';

export function LoginScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.primaryClr,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 40, color: 'white' }}>Login</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
