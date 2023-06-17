import { useState } from "react"
import MenuItem from "./MenuItem"

const MenuDetails = ({ menu, isSubheading }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(true)
  const isMenuVisible = menu?.title !== undefined
  const isCategoriesAvailable = menu?.categories !== undefined
  const title = menu?.title

  const handleAccordion = () => {
    setIsAccordionOpen(prev => !prev)
  }

  console.log(menu)
  if (menu === undefined) {
    return <div>... loading</div>
  }

  return (
    <>
      {isMenuVisible && (
        <div className={`flex flex-col gap-4 ${isSubheading ? "" : "border-b-[14px]"} pb-2`}>
          {/* heading vs subheading on the basis of categories available */}
          <div className="flex justify-between items-center pt-3" onClick={handleAccordion}>
            <h3 className={`text-slate-700 ${isSubheading ? "font-medium  text-md" : "font-bold text-lg"}`}>
              {title} {menu?.itemCards && `(${menu?.itemCards.length})`}
            </h3>
            {!isCategoriesAvailable && <p>{isAccordionOpen ? "[CLOSE]" : "[OPEN]"}</p>}
          </div>

          {/* If categories is Available, Call recursively */}
          {isCategoriesAvailable &&
            menu?.categories.map((subMenu, index) => {
              return <MenuDetails key={index} menu={subMenu} isSubheading={true} />
            })}

          {/* menu item */}
          {isAccordionOpen &&
            !isCategoriesAvailable &&
            menu?.itemCards?.map(itemDetail => {
              return <MenuItem key={itemDetail?.card?.info?.id} itemDetail={itemDetail?.card?.info} />
            })}
        </div>
      )}
    </>
  )
}

export default MenuDetails
