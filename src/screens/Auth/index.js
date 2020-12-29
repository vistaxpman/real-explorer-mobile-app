import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './authStyle';
import {AuthImg} from '../../assets/illustrations';
import {handleScreenNavigation} from '../../navigators/NavigatorHandler';

export function Auth({navigation}) {
  return (
    <View style={styles.authContainer}>
      <View style={styles.authContent}>
        <AuthImg style={styles.authImgWrapper} width="50%" height="25%" />
        <Text style={styles.textOne}>Invest</Text>
        <Text style={styles.textTwo}>
          Create an account and start your getting good accomodation
        </Text>
        <View style={styles.bottomWrapper}>
          <TouchableOpacity onPress={() => handleScreenNavigation(navigation, 'SignUp')}>
            <LinearGradient
              colors={['#2B8DDC', '#3B7AE2']}
              style={styles.btnGradient}>
              <Text style={styles.whiteText}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleScreenNavigation(navigation, 'SignIn')}>
            <View style={styles.btnSignIn}>
              <Text style={styles.blueText}>Sign In</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
