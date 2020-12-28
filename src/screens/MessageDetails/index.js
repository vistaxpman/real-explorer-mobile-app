import React, {useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import shortid from 'shortid';
import styles from './messageDetailsStyle';
import {handleScreenBack} from '../../navigators/NavigatorHandler';

export function MessageDetails({navigation}) {
  const [data, setData] = useState({});

  return (
    <KeyboardAvoidingView style={styles.messageDetailsContainer}>
      <View style={styles.messageDetailsHeader}>
        <TouchableOpacity onPress={() => handleScreenBack(navigation)}>
          <View style={styles.backArrowWrapper}>
            <AntDesign name="arrowleft" size={20} color="#000" />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerText} numberOfLines={1} ellipsizeMode="tail">
          Veronica Jung
        </Text>
        <Feather
          name="phone"
          size={20}
          color="#00AB6B"
          style={styles.phoneIcon}
        />
        <MaterialIcons name="perm-device-info" size={20} color="#00AB6B" />
      </View>
      <View style={styles.messageDetailsContent}>
        <ScrollView
          style={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}>
          <View></View>
        </ScrollView>
        <View style={styles.bottomMessageContainer}>
          <AntDesign name="camerao" size={20} />
          <TextInput placeholder="Type Message" />
          <Text>Test</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}