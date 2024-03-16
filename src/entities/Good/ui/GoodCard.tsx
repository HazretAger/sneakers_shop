import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './GoodCard.module.scss';

interface GoodCardProps {
    className?: string;
}

export const GoodCard = (props: GoodCardProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.GoodCard, {}, [className])}>
            <div className={cls.content}>
                Карточка товара
            </div>
        </div>
    );
};
