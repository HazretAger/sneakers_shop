import { useQuery } from '@tanstack/react-query';
import { fetchGoods } from '../../api/fetchGoods';

export const useFetchGoods = () => {
    return useQuery({
        queryKey: ['fetchPosts'],
        queryFn: () => fetchGoods(),
    });
};
