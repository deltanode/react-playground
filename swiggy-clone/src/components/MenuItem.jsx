import { CLOUDINARY_MENU_IMAGE_URL } from "../utils/constant"

const MenuItem = ({ itemDetail }) => {
  const { id, name, isVeg, imageId, defaultPrice, description } = itemDetail
  // console.log(imageId)
  return (
    <div className="w-full flex justify-between border-b pb-4">
      {/* food detail */}
      <div className="flex flex-col justify-between py-1">
        <span className="flex flex-col gap-[1px]">
          <div className="w-[12px] h-[12px] bg-green-900 flex justify-center items-center text-white">*</div>
          <h3 className="font-medium text-[16px] ">{name} (1 Pc)</h3>
          <p className="text-[14px] font-medium text-slate-600"> Rs {defaultPrice}</p>
        </span>
        <p className="text-[12px] text-slate-400">{description}/100</p>
      </div>
      {/* food image */}
      <div className="relative min-w-[120px] w-[120px] h-[100px] bg-slate-200 flex justify-center">
        <img src={CLOUDINARY_MENU_IMAGE_URL + imageId} alt={name} className="w-full h-auto object-cover" />
        <button className="absolute bottom-0 uppercase bg-white text-green-800 text-xs px-6 py-1 border rounded-md hover:opacity-80">ADD</button>
      </div>
    </div>
  )
}

export default MenuItem
