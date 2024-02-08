import {View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import ApiHelper from '@helpers/ApiHelper';
import {PRODUCTS_URL, PRODUCT_ICON_URL} from '@constants';
import ItemComponent from '@components/ItemComponent';
import styles from './styles';

const ProductsScreen = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    ApiHelper.get(PRODUCTS_URL)
      .then(data => {
        data.map(obj => (obj.image_url = PRODUCT_ICON_URL));
        setProductsData(data);
      })
      .catch(ex => {
        console.log(ex);
      });
  }, []);

  const renderProductItem = ({item}) => {
    return <ItemComponent item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={productsData}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ProductsScreen;
