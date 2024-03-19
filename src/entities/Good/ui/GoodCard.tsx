import { classNames } from '@/shared/lib/classNames/classNames';
import { IGood } from '../model/types/goodType';
import Button from '@mui/material/Button';
import cls from './GoodCard.module.scss';

interface GoodCardProps {
    className?: string;
    good: IGood;
}

export const GoodCard = (props: GoodCardProps) => {
    const { className, good } = props;
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
                            <p className={cls.price}>{price}</p>
                        </div>
                        <Button variant="contained" type="submit" size="small">
                            Купить
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
