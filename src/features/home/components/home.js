import React from 'react';
import {  Text, View, Image, TouchableOpacity, ImageBackground,  AsyncStorage, ActivityIndicator} from 'react-native';
import { styles } from './styles';
import { Camera, Permissions, DocumentPicker, MailComposer,  FileSystem, Print } from 'expo';
import { Ionicons } from '@expo/vector-icons';



export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
      const { loading, list } = this.props;
      return (
            <View style={ styles.container }>
                <Text> Welcome Screen </Text>
            </View>
        );
    }
}
