import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query';
import {BASE_LOCAL_URL, GET_ITEMS_URL, POST_ITEM_URL} from '@constants';
import {DataHelper} from '@helpers';

export const itemApi = createApi({
  reducerPath: 'itemApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_LOCAL_URL,
  }),
  tagTypes: ['items'],
  endpoints: builder => ({
    getItems: builder.query({
      query: () => GET_ITEMS_URL,
      providesTags: ['items'],
    }),
    addItem: builder.mutation({
      query: item => ({
        url: POST_ITEM_URL,
        method: 'POST',
        body: item,
        headers: {'X-Access-Token': DataHelper.getUserAccessToken()},
      }),
      invalidatesTags: ['items'],
    }),
  }),
});

export const {useAddItemMutation, useGetItemsQuery} = itemApi;
