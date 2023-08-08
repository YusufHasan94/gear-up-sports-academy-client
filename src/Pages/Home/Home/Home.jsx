import dynamicTitle from '../../../hooks/dynamicTitle';
import Banner from '../Banner/Banner';
import Message from '../Message/Message';
import PopularClass from '../PopularClass/PopularClass';
import PopularImages from '../PopularImages/PopularImages';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import Sponsers from '../Sponsers/Sponsers';
import TopReview from '../TopReview/TopReview';

const Home = () => {
    dynamicTitle('Home');
    return (
        <div className=''>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <TopReview></TopReview>
            <PopularImages></PopularImages>
            <Sponsers></Sponsers>
            <Message></Message>
        </div>
    );
};

export default Home;