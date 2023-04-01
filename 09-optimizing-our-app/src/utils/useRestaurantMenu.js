import { useState, useEffect } from "react"
import { SWIGGY_RESTAURANT_DETAILS_API } from "../Config"

const useRestaurant = resId => {
  // ---useState ---
  const [restaurant, setRestaurant] = useState([])
  const [menu, setMenu] = useState([])

  // ---useEffect---
  useEffect(() => {
    // console.log("I am useEffect() inside <RestaurantMenu />")
    getRestaurantMenu()
  }, [])

  async function getRestaurantMenu() {
    const data = await fetch(SWIGGY_RESTAURANT_DETAILS_API + resId)
    const json = await data?.json()

    const restaurantData = json?.data?.cards[0].card.card.info
    // console.log(restaurantData)
    setRestaurant(restaurantData)

    const menuData = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
    // console.log(menuData)
    setMenu(menuData)
  }

  // menu.map(menuItem => {
  //   console.log(menuItem.card.info.name)
  // })

  return [restaurant, menu]
}

export default useRestaurant

/* 
- Image CDN URL for Restaurant card

export const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

- Image CDN URL for Restaurant Menu
export const ITEM_IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

- Swiggy API to get Restaurant data with corsanywhere
export const swiggy_api_URL =
  "https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING";

- Swiggy API to get Restaurant Menu data with corsanywhere
export const swiggy_menu_api_URL =
"https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=";

- Extracting data from Restaurant Menu API
const restaurantData = json?.data?.cards?.map(x => x.card)?.
                             find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;

const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
                            groupedCard?.cardGroupMap?.REGULAR?.
                            cards?.map(x => x.card?.card)?.
                            filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
                            map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];

*/
