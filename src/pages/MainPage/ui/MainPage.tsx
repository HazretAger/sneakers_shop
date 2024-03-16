import { Wrapper } from '@/shared/ui/Wrapper';
import { MainLayout } from '@/app/layouts/MainLayout';
import { GoodCard } from '@/entities/Good';

const MainPage = () => {
    return (
        <Wrapper>
            <MainLayout />
            <GoodCard />
        </Wrapper>
    );
};

export default MainPage;
