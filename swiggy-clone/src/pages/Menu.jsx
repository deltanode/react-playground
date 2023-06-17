import { useParams } from "react-router-dom"
import useFetchMenuDetails from "../utils/useFetchMenuDetail"
import { SWIGGY_RESTAURANT_DETAIL_API } from "../utils/request"
import style from "../style"
import MenuDetails from "../components/MenuDetails"

const RestaurantDetail = () => {
  const { id } = useParams()
  const { restaurantDetail, restaurantSummary, restaurantMenu, menuDiscountCoupon, serverError } = useFetchMenuDetails(SWIGGY_RESTAURANT_DETAIL_API + id)

  if (!restaurantDetail) {
    return <div>...Shimmer</div>
  }

  if (serverError) {
    console.log("Server Error: ", serverError)
    return <div>...Error in loading Data from the Server</div>
  }

  // console.log("restaurantDetail: ", restaurantDetail)
  // console.log("restaurantSummary: ", restaurantSummary)
  // console.log("restaurantMenu: ", restaurantMenu)
  // console.log("menuDiscountCoupon: ", menuDiscountCoupon)

  const { name, cuisines, areaName, avgRatingString, totalRatingsString, sla, costForTwoMessage, aggregatedDiscountInfo, veg } = restaurantSummary
  const { lastMileTravelString, slaString } = sla
  // const { descriptionList, visible } = aggregatedDiscountInfo
  // console.log(descriptionList, visible)

  // const { header, couponCode, description, offerLogo } = menuDiscountCoupon[0]?.info
  // console.log(header, couponCode, description, offerLogo)

  return (
    <section className={`w-full max-w-[900px] ${style.paddingX}`}>
      {/* breadcrumb & search */}
      <div className="w-full flex justify-between items-center mt-6">
        <div>
          <p className=" text-xs text-slate-400">
            Home / Gurgaon / <span className="text-slate-800">{name}</span>
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-800">Search</p>
        </div>
      </div>

      {/* restaurant summary */}
      <div className="px-4">
        {/* restaurant detail */}
        <div className="w-full flex justify-between items-center pt-8  pb-4 border-b-2 border-dotted border-slate-300">
          <div>
            <h2 className="font-semibold text-xl">{name}</h2>
            <h4 className="text-slate-500 text-sm pt-2">{cuisines?.toString(", ")}</h4>
            <p className="text-slate-500 text-sm">
              {areaName}, {lastMileTravelString}
            </p>
          </div>
          <div className="border w-[8 0px] flex flex-col items-center gap-1 p-2 rounded-md">
            <p className=" font-bold text-green-800">{avgRatingString}</p>
            <p className="text-[12px] text-slate-500 border-t pt-1">{totalRatingsString}</p>
          </div>
        </div>

        {/* restaurant distance & price */}
        <div className="flex gap-4 pt-4">
          <p className="font-extrabold text-slate-700">{slaString}</p>
          <p className="font-extrabold text-slate-700">{costForTwoMessage}</p>
        </div>

        {/* restaurant veg vs non-veg */}
        <div className=" pt-8">
          <p className={`font-bold text-green-500 `}>
            VEG
            {!veg && (
              <span className="text-slate-600">
                {" & "}
                <span className="text-red-800"> NON VEG </span>
              </span>
            )}
          </p>
        </div>
      </div>

      {/* restaurant menu */}
      <div className="w-full flex flex-col border-t border-slate-300 mt-5  pt-4  px-4">
        {restaurantMenu.map((menu, index) => {
          return <MenuDetails key={index} menu={menu?.card?.card} />
        })}
      </div>
    </section>
  )
}

export default RestaurantDetail
