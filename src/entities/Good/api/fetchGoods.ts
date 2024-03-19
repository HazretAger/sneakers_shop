import { IGood } from '../model/types/goodType';
import { $api } from '@/shared/api/axiosInstance';

type FetchGoodResponse = IGood[];

export const fetchGoods = async () => {
    const { data } = await $api.get<FetchGoodResponse>(`/goods`);

    return data;
};
