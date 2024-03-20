import { AppLink } from '@/shared/ui/AppLink';
import { Wrapper } from '@/shared/ui/Wrapper';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useCartStore } from '@/features/Cart';
import User from '@/shared/assets/icons/user.svg?react'
import Cart from '@/shared/assets/icons/cart.svg?react'
import Favorite from '@/shared/assets/icons/favorite.svg?react'
import Logo from '@/shared/assets/icons/logo.svg?react';
import cls from './Header.module.scss';

interface HeaderProps {
    className?: string;
}
export const Header = (props: HeaderProps) => {
    const { className } = props;
    const totalSum = useCartStore((state) => state.totalSum)

    return (
        <header className={classNames(cls.Header, {}, [className])}>
            <Wrapper>
                <div className={cls.content}>
                    <div className={cls.logo}>
                        <AppLink to="/" icon={<Logo className={cls.logoIcon} />} />
                    </div>
                    <div className={cls.navList}>
                        <div className={cls.navItem}>
                            <Cart />
                            <p className={cls.navText}>{ totalSum } руб.</p>
                        </div>
                        <div className={cls.navItem}>
                            <Favorite />
                            <p className={cls.navText}>Закладки</p>
                        </div>
                        <div className={cls.navItem}>
                            <User />
                            <p className={cls.navText}>Профиль</p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </header>
    );
};
