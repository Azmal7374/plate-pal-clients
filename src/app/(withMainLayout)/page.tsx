/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import JoinCommunity from '@/src/components/home/CommunityHighlight/CommunityHighlight';
import FeaturedChefs from '@/src/components/home/FaturesChfs/FeatureChef';
import Banner from '@/src/components/home/Hero/Banner';
import HowItWorks from '@/src/components/home/HowItWorks/HowItWorks';
import NewsletterSignUp from '@/src/components/home/NewsLetterSignUp/NewsLetterSignUp';
import PopularIngredients from '@/src/components/home/PopularIngredients/PopularIngredinat';
import PopularRecipes from '@/src/components/home/PopularRecipe/PopularRecipe';
import PremiumFeatures from '@/src/components/home/PremiumFatures/PremiumFeatues';
import RecipeCategories from '@/src/components/home/RecipeCategories/RecipeCategories';

const HomePage = () => {

    
    return (
        <div className="bg-slate-100 p-10">
           <Banner/>
           <PopularRecipes></PopularRecipes>
           <HowItWorks />
           <RecipeCategories/>
           <JoinCommunity/>
           <FeaturedChefs/>
           <NewsletterSignUp/>
           <PopularIngredients/>
           <PremiumFeatures/>
         
        </div>
    );
};

export default HomePage;