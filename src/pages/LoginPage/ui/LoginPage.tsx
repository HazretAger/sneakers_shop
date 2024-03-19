import { Wrapper } from '@/shared/ui/Wrapper';
import { Authentication } from '@/widgets/Authentication';
import cls from './LoginPage.module.scss';

const LoginPage = () => {
    return (
        <div className={cls.LoginPage}>
            <Wrapper>
                <div className={cls.formBlock}>
                    <Authentication />
                </div>
            </Wrapper>
        </div>
    );
};

export default LoginPage;
