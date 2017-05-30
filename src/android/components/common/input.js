import React from 'react';
import { TextInput, View, Text } from 'react-native';

class Input extends React.Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.labelStyle}>{this.props.label}</Text>
                <TextInput
                    secureTextEntry={this.props.secureText}
                    placeholder={this.props.placeHolder}
                    autoCorrect={false}
                    style={styles.inputStyle}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                />
            </View>
        );
    }
}

const styles = {
    inputStyle: {
        flex: 2,
        fontSize: 20,
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        lineHeight: 25
    },
    labelStyle: {
        fontSize: 20,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        flexDirection: 'row',
        flex: 1,
        height: 50,
        alignItems: 'center'
    }
};

export { Input };
