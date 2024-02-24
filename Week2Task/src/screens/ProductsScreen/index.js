import {View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ApiHelper} from '@helpers';
import {PRODUCTS_URL, PRODUCT_ICON_URL} from '@constants';
import ProductItem from '@components/ProductItem';
import styles from './styles';

const ProductsScreen = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    ApiHelper.get(PRODUCTS_URL)
      .then(data => {
        data?.map(obj => (obj.image_url = PRODUCT_ICON_URL));
        setProductsData(data);
      })
      .catch(ex => {
        console.log(ex);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={productsData}
        renderItem={({item}) => {
          return <ProductItem item={item} />;
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ProductsScreen;
