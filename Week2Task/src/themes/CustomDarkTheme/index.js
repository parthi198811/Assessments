import {DarkTheme} from '@react-navigation/native';

const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    text: 'rgb(28, 28, 30)',
  },
};

export default CustomDarkTheme;
