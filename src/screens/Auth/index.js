import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './authStyle';
import {AuthImg} from '../../assets/illustrations';

export function Auth({navigation}) {
  const handleNavigation = (route, param) => {
    navigation.navigate(route, {
      param,
    });
  };

  return (
    <View style={styles.authContainer}>
      <View style={styles.authContent}>
        <AuthImg style={styles.authImgWrapper} width="50%" height="25%" />
        <Text style={styles.textOne}>Invest</Text>
        <Text style={styles.textTwo}>
          Create an account and start your getting good accomodation
        </Text>
        <View style={styles.bottomWrapper}>
          <TouchableWithoutFeedback onPress={() => handleNavigation('SignUp')}>
            <LinearGradient
              colors={['#2B8DDC', '#733CF6']}
              style={styles.btnGradient}>
              <Text style={styles.whiteText}>Sign Up</Text>
            </LinearGradient>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleNavigation('SignIn')}>
            <View style={styles.btnSignIn}>
              <Text style={styles.blueText}>Sign In</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}
