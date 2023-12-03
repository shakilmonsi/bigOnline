import React from 'react';
import CatagoryBanner from '../CatagoryBanner/CatagoryBanner';
import CatagoryNevberTwo from '../CatagoryNevberTwo/CatagoryNevberTwo';
import DealsYouMighLikeWeeklyOffers from '../../../Home/Home/DealsYouMighLikeWeeklyOffers/DealsYouMighLikeWeeklyOffer/DealsYouMighLikeWeeklyOffers';
import TrendingDealsInElectronics from '../../../Home/Home/TrendingDealsInElectronics/TrendingDealsInElectronics';
import Catagrytrowelproducts from '../../../Home/Home/shercomponent/catagrytrowelproducts/Catagrytrowelproducts';
import NewArrivals from '../../../Home/Home/NewArrivalS/NewArrivalS/NewArrivals';

const Catagoryfivepage=()=> {
    return (
        <div>
        <CatagoryBanner></CatagoryBanner>
        <CatagoryNevberTwo></CatagoryNevberTwo>
        <DealsYouMighLikeWeeklyOffers></DealsYouMighLikeWeeklyOffers>
        <NewArrivals></NewArrivals>
        <Catagrytrowelproducts></Catagrytrowelproducts>
        <TrendingDealsInElectronics></TrendingDealsInElectronics>
            
        </div>
    );
}

export default Catagoryfivepage;