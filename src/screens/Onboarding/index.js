import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './onboardingStyle';
import {OnboardingImg} from '../../assets/illustrations';
import {Progress} from '../../assets/icons';
import {handleScreenNavigation} from '../../navigators/NavigatorHandler';

export function Onboarding({navigation}) {
  return (
    <View style={styles.onboardingContainer}>
      <View style={styles.onboardingContent}>
        <OnboardingImg
          style={styles.onboardingImgWrapper}
          width="45%"
          height="25%"
        />
        <Text style={styles.textOne}>Invest</Text>
        <Text style={styles.textTwo}>Thousands of homes waiting for you</Text>
        <View style={styles.bottomWrapper}>
          <Progress style={styles.progress} />
          <TouchableWithoutFeedback
            onPress={() => handleScreenNavigation(navigation, 'Auth')}>
            <LinearGradient
              colors={['#2B8DDC', '#3B7AE2']}
              style={styles.linearGradient}>
              <MaterialIcons
                name="keyboard-arrow-right"
                color="#fff"
                size={18}
              />
            </LinearGradient>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}
