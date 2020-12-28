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
import {combineData} from '../../utils/helpers';
import {CustomArrowUp} from '../../assets/icons';

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
          <View style={styles.messageContainer}>
            <Text style={styles.viewListingBtn}>View Listing</Text>
          </View>
        </ScrollView>
        <View style={styles.bottomMessageContainer}>
          <View style={styles.messageFieldWrapper}>
            <AntDesign name="camerao" size={20} color="gray" />
            <TextInput
              placeholder="Type Message"
              style={styles.messageTextInput}
            />
          </View>
          <TouchableOpacity>
            <View style={styles.sendMessageBtn}>
              <CustomArrowUp width={25} height={25} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
