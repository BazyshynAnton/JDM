import CarouselSlide from './homePageComponents/carouselSlide/CarouselSlide'
import Panel from './homePageComponents/panel/Panel'
import LatestArrivals from './homePageComponents/carouselsOfCars/latestArrivals/LatestArrivals'
import FeaturedCars from './homePageComponents/carouselsOfCars/featuredCars/FeaturedCars'
import InventoryByManufactures from './homePageComponents/carouselsOfCars/inventoryByManufactures/InventoryByManufactures'
import ForumBanner from './homePageComponents/forumBanner/ForumBanner'
import InformationDesk from './homePageComponents/informationDesk/InformationDesk'

import styles from './ContentOfHomePage.module.scss'

const ContentOfHomePage = () => {
  return (
    <>
      <div className="my-container">
        <div className={styles.containerCarouselAndPanel}>
          <CarouselSlide />
          <Panel />
        </div>
        <LatestArrivals />
        <FeaturedCars />
        <InventoryByManufactures />
        <ForumBanner />
        <InformationDesk />
      </div>
    </>
  )
}

export default ContentOfHomePage
