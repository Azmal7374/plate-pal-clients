/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import Banner from '@/src/components/home/Banner';
import HowItWorks from '@/src/components/home/HowItWorks/HowItWorks';
import PopularRecipes from '@/src/components/home/PopularRecipe/PopularRecipe';

const HomePage = () => {
    return (
        <div>
           <Banner/>
           <HowItWorks />
           <PopularRecipes></PopularRecipes>
        </div>
    );
};

export default HomePage;