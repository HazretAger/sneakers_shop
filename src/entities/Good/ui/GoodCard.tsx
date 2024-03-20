import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { IGood } from '../model/types/goodType';
import cls from './GoodCard.module.scss';

interface GoodCardProps {
    className?: string;
    good: IGood;
    actionButtons: ReactNode
}

export const GoodCard = (props: GoodCardProps) => {
    const { className, good, actionButtons } = props;
    const { name, description, price, img } = good;

    return (
        <div className={classNames(cls.GoodCard, {}, [className])}>
            <div className={cls.content}>
                <div className={cls.imgBox}>
                    <img src={img} alt="product_image" />
                </div>
                <div className={cls.info}>
                    <p className={cls.name}>{name}</p>
                    <div className={cls.block}>
                        <div className={cls.priceBlock}>
                            <p className={cls.priceName}>Цена:</p>
                            <p className={cls.price}>{price} руб</p>
                        </div>
                        { actionButtons }
                    </div>
                </div>
            </div>
        </div>
    );
};
