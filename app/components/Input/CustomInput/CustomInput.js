/* eslint-disable react/no-string-refs */
/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  TextInput,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from 'react-native';

import BaseInput from '../BaseInput';

const FOCUS_BORDER_WIDTH = 2;
const NO_FOCUS_BORDER_WIDTH = 1;
const INACTIVE_COLOR = '#7d7d7d';
const DEFAULT_TEXT_COLOR = '#292C2F';
const DARK = '#292C2F';
const LIGHT = 'white';

export default class CustomInput extends BaseInput {
  componentDidMount() {
    this.setState({
      changeColor: INACTIVE_COLOR,
      inputBorderWidth: NO_FOCUS_BORDER_WIDTH,
      textColor: this.props.dark ? LIGHT : DARK,
      typeColor: this.props.labelBackgroundColor,
    });
  }
  static propTypes = {
    /*
     * this is applied as active border and label color
     */
    height: PropTypes.number,
    dark: PropTypes.bool,
  };

  static defaultProps = {
    // borderColor: '#7A7593',
    animationDuration: 200,
    height: 48,
    dark: false,
  };

  render() {
    const {
      label,
      style: containerStyle,
      height: inputHeight,
      inputStyle,
      labelStyle,
      isPassword,
      onChangeText,
    } = this.props;
    const {width, focusedAnim, value} = this.state;
    return (
      <View
        style={[containerStyle, styles.mainContent]}
        onLayout={this.onLayout}>
        <TouchableWithoutFeedback onPress={this.focus}>
          <Animated.View
            style={[
              styles.labelContainer,
              {
                marginLeft: focusedAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [15, 0],
                }),
                height: 13,
                top: focusedAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [12, 0],
                }),
                zIndex: 2,
              },
            ]}>
            <Animated.Text
              style={[
                styles.label,
                labelStyle,
                {
                  backgroundColor: this.state.typeColor,
                  color: this.state.changeColor,
                  marginLeft: focusedAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 10],
                  }),
                  paddingLeft: focusedAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 4],
                  }),
                  paddingRight: focusedAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 4],
                  }),
                  fontSize: focusedAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [18, 14],
                  }),
                  bottom: focusedAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 11],
                  }),
                },
              ]}>
              {label}
            </Animated.Text>
          </Animated.View>
        </TouchableWithoutFeedback>
        <TextInput
          onChangeText={onChangeText}
          secureTextEntry={isPassword}
          ref="input"
          {...this.props}
          style={[
            styles.textInput,
            {
              borderColor: this.state.changeColor,
              borderWidth: this.state.inputBorderWidth,
              color: this.state.textColor,
            },
            inputStyle,
            {
              width,
              height: inputHeight,
            },
          ]}
          value={value}
          onBlur={this.firstOnBlur}
          onChange={this.onChange}
          onFocus={this.firstOnFocus}
        />
      </View>
    );
  }

  firstOnFocus = () => {
    this.onFocusSetState();
    this.onFocus();
  };

  onFocusSetState = () => {
    this.setState({
      changeColor: this.props.customBorderColor,
      inputBorderWidth: FOCUS_BORDER_WIDTH,
      textColor: this.props.light ? DARK : LIGHT,
    });
  };

  setColorType = () => {
    let response = '';

    if (!this.props.dark) {
      response = DEFAULT_TEXT_COLOR;
    }

    if (this.props.dark) {
      response = DARK;
    }

    if (!this.props.dark) {
      response = LIGHT;
    }

    return response;
  };

  firstOnBlur = () => {
    this.onBlurSetState();
    this.onBlur();
  };

  onBlurSetState = () => {
    this.setState({
      changeColor: INACTIVE_COLOR,
      inputBorderWidth: NO_FOCUS_BORDER_WIDTH,
      textColor: INACTIVE_COLOR,
    });
  };
}

const styles = StyleSheet.create({
  mainContent: {
    margin: 10,
  },
  inputContainer: {
    borderBottomWidth: 2,
    margin: 5,
  },
  labelContainer: {
    zIndex: 2,
    position: 'absolute',
  },
  label: {
    flexDirection: 'row',
    // backgroundColor: '#37393B',
    alignSelf: 'flex-start',
  },
  textInput: {
    borderRadius: 5,
    // borderWidth: 1,
    color: 'white',
    fontSize: 16,
    paddingLeft: 14,
    paddingRight: 14,
  },
});
