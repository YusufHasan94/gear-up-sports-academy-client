import dynamicTitle from '../../../hooks/dynamicTitle';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import TopReview from '../TopReview/TopReview';

const Home = () => {
    dynamicTitle('Home');
    return (
        <div className=''>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <TopReview></TopReview>
        </div>
    );
};

export default Home;