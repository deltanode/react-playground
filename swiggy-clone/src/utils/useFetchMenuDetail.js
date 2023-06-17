import { useEffect, useState } from "react"

const useFetchMenuDetails = URL => {
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState(null)
  const [restaurantDetail, setRestaurantDetail] = useState(null)
  const [restaurantSummary, setRestaurantSummary] = useState(null)
  const [restaurantMenu, setRestaurantMenu] = useState(null)
  const [menuDiscountCoupon, setMenuDiscountCoupon] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      try {
        const response = await fetch(URL)
        const jsonData = await response.json()
        // console.log("jsonData [fetch Menu]: ", jsonData)
        // console.log("restaurant details: ", restaurantDetail?.data?.cards[0]?.card?.card?.info)
        // console.log("discount coupon: ", restaurantDetail?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers)
        // console.log("Restaurant Menu :", jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        setRestaurantDetail(jsonData)
        setRestaurantSummary(jsonData?.data?.cards[0]?.card?.card?.info)
        setMenuDiscountCoupon(restaurantDetail?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers)
        setRestaurantMenu(jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        setIsLoading(false)
      } catch (err) {
        setServerError(err.message)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { isLoading, serverError, restaurantDetail, restaurantSummary, restaurantMenu, menuDiscountCoupon }
}

export default useFetchMenuDetails
