import { useRestaurantContext } from "../contexts/RestaurantContext"
import { CLOUDINARY_CAROUSEL_IMAGE_URL } from "../utils/constant"

const RestaurantCarousel = () => {
  const { configOptions, configOptions2 } = useRestaurantContext()

  const handleScrollLeft = () => {
    const slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const handleScrollRight = () => {
    const slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <div className="w-full relative">
      <div id="slider" className="w-[100%] h-[340px] flex justify-start py-2  overflow-x-scroll gap-14 py-8">
        {/* carousel arrows */}
        <div className="absolute  w-full h-full top-0 left-0 flex items-center justify-between p-2">
          <button onClick={handleScrollLeft} className=" w-[20px] h-[20px] bg-white text-gray-700 rounded-full flex justify-center items-center p-4 hover:opacity-90">
            1
          </button>
          <button onClick={handleScrollRight} className=" w-[20px] h-[20px] bg-white text-gray-700 rounded-full flex justify-center items-center p-4 hover:opacity-90">
            2
          </button>
        </div>
        {/* carousel images */}
        {configOptions.map(carousel => {
          const { creativeId, bannerId } = carousel.data
          return <img key={bannerId} src={CLOUDINARY_CAROUSEL_IMAGE_URL + creativeId} alt="offer" className="w-full h-auto object-cover hover:scale-[1.05]" />
        })}
        {/* carousel images */}
        {configOptions2.map(carousel => {
          const { creativeId, bannerId } = carousel.data
          return <img key={bannerId} src={CLOUDINARY_CAROUSEL_IMAGE_URL + creativeId} alt="offer" />
        })}
      </div>
    </div>
  )
}

export default RestaurantCarousel
