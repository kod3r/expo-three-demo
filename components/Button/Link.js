//
// Copyright (c) 2017-present, by Evan Bacon. All Rights Reserved.
// @author Evan Bacon / https://github.com/EvanBacon
//

import React from "react";
import {Image, Text, View, TouchableOpacity} from 'react-native'
import Colors from '../../Colors'
import PropTypes from 'prop-types';

export default class Button extends React.PureComponent {

  static propTypes = {
    textStyle: PropTypes.object
  }
  static defaultProps = {
    textStyle: {},
    activeOpacity: 0.6,
    onPress: _=> {}
  }
  
  render = () => (
    <TouchableOpacity activeOpacity={this.props.activeOpacity} style={{height: 56, maxHeight: 56, flex: 1}} onPress={this.props.onPress}>
      <View style={[{borderRadius: 2, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent'}, this.props.style]}>
        <Text style={[{color: Colors.tintColor, fontSize: 16, textAlign: 'center'}, this.props.textStyle]}>{this.props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
