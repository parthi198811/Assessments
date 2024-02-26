import React from 'react';
import useFetchData from '../../hooks/useFetchData';
import {PRODUCT_ICON_URL} from '../../constants';

const HocWrapper = url => DataComponent => {
  return props => {
    const {results, error, loading} = useFetchData(url);
    results?.map(obj => (obj.image_url = PRODUCT_ICON_URL));

    return (
      <DataComponent
        {...props}
        data={results}
        error={error}
        loading={loading}
      />
    );
  };
};

export default HocWrapper;
