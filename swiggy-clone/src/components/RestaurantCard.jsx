import React from "react"
import { CLOUDINARY_IMAGE_URL } from "../utils/constant"

const RestaurantCard = data => {
  const { name, cuisines, cloudinaryImageId, costForTwoString, minDeliveryTime, avgRating, ribbon } = data
  return (
    <div className="p-5 hover:border-2 hover:shadow-md flex flex-col gap-2">
      <div className="relative">
        <img className="w-full h-auto object-cover" src={CLOUDINARY_IMAGE_URL + cloudinaryImageId} alt="" />
        {ribbon?.length ? <div className="absolute top-0 left-0 uppercase bg-slate-900 opacity-90 text-white text-xs p-1">Promoted</div> : null}
      </div>
      <div>
        <h2 className="font-medium text-slate-900 text-lg">{name}</h2>
        <h3 className="text-slate-700 text-sm">{cuisines.join(", ")}</h3>
      </div>
      <div className="pt-2 flex justify-between items-center text-sm text-slate-700 uppercase">
        <p className="bg-green-600 text-white px-1 py-0.5">&diams; {avgRating}</p>
        <p>.</p>
        <p>{minDeliveryTime + " MIN"}</p>
        <p>.</p>
        <p>{costForTwoString}</p>
      </div>
    </div>
  )
}

export default RestaurantCard
