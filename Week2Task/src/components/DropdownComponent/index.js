import React, {memo, useState} from 'react';
import {Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
// import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import styles from './styles';
import {BASE_COLOR} from '../../constants';

const DropdownComponent = props => {
  const {data, label, customStyle, value, setDropdownValue} = props;

  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: BASE_COLOR}]}>
          {label}
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={[styles.container, customStyle]}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: BASE_COLOR}]}
        iconStyle={styles.iconStyle}
        data={data}
        labelField="label"
        valueField="value"
        placeholder={'Select ' + label}
        // placeholder={!isFocus ? 'Select ' + label : '...'}
        search={props.isSearch}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setDropdownValue(item.value);
          setIsFocus(false);
        }}
        // renderLeftIcon={() => (
        //   <AntDesign
        //     style={styles.icon}
        //     color={isFocus ? BASE_COLOR : 'black'}
        //     name="Safety"
        //     size={20}
        //   />
        // )}
      />
    </View>
  );
};

export default memo(DropdownComponent);
