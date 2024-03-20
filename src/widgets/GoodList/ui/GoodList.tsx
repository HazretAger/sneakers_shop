import { classNames } from '@/shared/lib/classNames/classNames';
import { BuyGoodButton } from '@/features/Good';
import { GoodCard } from '@/entities/Good';
import { useFetchGoods } from '@/entities/Good/lib/query/useFetchGoods';
import cls from './GoodList.module.scss';

interface GoodListProps {
    className?: string;
}

export const GoodList = (props: GoodListProps) => {
    const { className } = props;
    const { data, isPending, isError } = useFetchGoods();

    if (isPending) {
        return <div>...Идет загрузка</div>;
    }

    if (isError) {
        return <div>Произошла непредвиденная ошибка</div>;
    }

    return (
        <div className={classNames(cls.GoodsList, {}, [className])}>
            {data && data?.map((good) => (
                <GoodCard
                    key={good.id}
                    good={good}
                    actionButtons={<BuyGoodButton good={good} />}
                />
            ))}
        </div>
    );
};
