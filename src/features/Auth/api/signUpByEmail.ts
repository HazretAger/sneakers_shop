import { $api } from '@/shared/api/axiosInstance';
import { UserType } from '@/entities/User';
import { AuthByEmailType } from '../ui/AuthByEmail/AuthByEmail';

type LoginProps = AuthByEmailType;
type LoginResponse = {
    status: number;
    user: UserType;
    token: string;
};

export const signUpByEmail = async (authData: LoginProps) => {
    const { data } = await $api.post<LoginResponse>(`/register`, authData);

    return data;
};
