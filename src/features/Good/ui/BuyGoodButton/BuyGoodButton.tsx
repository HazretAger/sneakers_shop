import { classNames } from '@/shared/lib/classNames';
import { useState } from 'react';
import { useCartStore } from '@/features/Cart';
import Button from '@mui/material/Button';
import cls from './BuyGoodButton.module.scss';
import { IGood } from '@/entities/Good/model/types/goodType';

interface IBuyGoodButtonProps {
    className?: string;
    good: IGood;
}

export const BuyGoodButton = (props: IBuyGoodButtonProps) => {
    const [ isAddedFirstGood, setIsAddedFirstGood ] = useState<boolean>(false);
    const [ itemsCount, setItemsCount ] = useState<number>(0);
    const { className, good } = props;
    const price = Number(good.price);

    const handleItems = (type: string) => {
        if (type === 'increase') {
            setItemsCount((prevVal) => prevVal + 1);
        } else if (type === 'decrease') {
            setItemsCount((prevVal: number) => {
                if (prevVal === 1) {
                    setIsAddedFirstGood((prevVal) => !prevVal)
                    return prevVal - 1;
                } else return prevVal - 1;
            });
        }
    }

    const cartPriceHandler = useCartStore((state) => state.updateTotalSum)

    return (
        <div className={cls.mainContainer}>
            <div className={classNames(cls.block, { [cls.hidden]: isAddedFirstGood })}>
                <Button 
                    variant="contained" 
                    type="submit" 
                    size="small"
                    onClick={() => {
                        setIsAddedFirstGood((prevVal) => !prevVal);
                        handleItems('increase');
                        cartPriceHandler({ type: 'increase', price });
                    }}
                >
                    Купить
            </Button>
            </div>
            <div className={classNames(cls.flexBlock, { [cls.hidden]: !isAddedFirstGood })}>
                <Button 
                    variant="contained" 
                    type="submit" 
                    size="small"
                    onClick={() => {
                        handleItems('increase');
                        cartPriceHandler({ type: 'increase', price });
                    }}
                >
                    +
                </Button>
                <p className={cls.goodsCountText}>{itemsCount}</p>
                <Button 
                    variant="contained" 
                    type="submit" 
                    size="small"
                    onClick={() => {
                        handleItems('decrease');
                        cartPriceHandler({ type: 'decrease', price });
                    }}
                >
                    -
                </Button>
            </div>
        </div>
    );
};