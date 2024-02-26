import {View, FlatList, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ApiHelper} from '@helpers';
import {BASE_URL, PRODUCTS_URL, PRODUCT_ICON_URL} from '@constants';
import ProductItem from '@components/ProductItem';
import styles from './styles';
import HocWrapper from './HocWrapper';

const ProductsScreen = ({data, error, loading}) => {
  // const [productsData, setProductsData] = useState([]);

  // useEffect(() => {
  //   ApiHelper.get(PRODUCTS_URL)
  //     .then(data => {
  //       data?.map(obj => (obj.image_url = PRODUCT_ICON_URL));
  //       setProductsData(data);
  //     })
  //     .catch(ex => {
  //       console.log(ex);
  //     });
  // }, []);

  if (!loading && error) Alert.alert(error.toString());

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return <ProductItem item={item} />;
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

// export default ProductsScreen;
export default HocWrapper(BASE_URL + PRODUCTS_URL)(ProductsScreen);
