import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { HInput } from '@/shared/ui/FormComponents';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useSignInUpEmail } from '../../lib/query/useSignUpByEmail';
import Button from '@mui/material/Button';
import cls from './RegByEmail.module.scss';

const RegByEmailSchema = z.object({
    email: z.string().email('email написан некоректно'),
    password: z.string().min(5, { message: 'Введите не менее 5 символов' }),
});

export type RegByEmailType = z.infer<typeof RegByEmailSchema>;

interface RegByEmailProps {
    className?: string;
}

const defaultValues = {
    email: '',
    password: '',
};

export const RegByEmail = (props: RegByEmailProps) => {
    const { className } = props;
    const { mutate: onAuth, isPending } = useSignInUpEmail();

    const methods = useForm<RegByEmailType>({
        defaultValues,
        resolver: zodResolver(RegByEmailSchema),
    });

    const { handleSubmit } = methods;

    const submitHandler = async (loginData: RegByEmailType) => {
        onAuth(loginData);
    };

    return (
        <div className={classNames(cls.AuthByEmail, {}, [className])}>
            <FormProvider {...methods}>
                <form className={cls.form} onSubmit={handleSubmit(submitHandler)}>
                    <HInput //
                        className={cls.field}
                        name="email"
                        placeholder="Введите email"
                    />
                    <HInput //
                        className={cls.field}
                        name="password"
                        placeholder="Введите пароль"
                        type="password"
                    />
                    <Button variant="contained" type="submit" size="large">Зарегистрироваться</Button>
                </form>
            </FormProvider>
        </div>
    );
};
