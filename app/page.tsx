import HomeTemplate from '@templates/home-template/HomeTemplate';
import './globals.css';

const Home = () => {
    return (
        <main className=' flex min-h-screen flex-col items-center justify-center xs:p-4'>
            <HomeTemplate></HomeTemplate>
        </main>
    );
};

export default Home;
