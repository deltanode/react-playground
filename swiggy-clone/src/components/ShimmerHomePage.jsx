import style from "../style"

const ShimmerRestaurantNavBar = () => {
  return (
    <div className="w-full flex justify-between items-center pt-8 pb-6 border-b gap-2">
      <div className="bg-slate-300 w-[20%] h-[16px]" />
      <section className="flex flex-row gap-6  w-[50%] sm:w-[30%]">
        <div className="bg-slate-300  flex-1 h-[18px]" />
        <div className="bg-slate-300  flex-1 h-[18px]" />
        <div className="bg-slate-300  flex-1 h-[18px]" />
        <div className="bg-slate-300  flex-1 h-[18px]" />
      </section>
    </div>
  )
}

const ShimmerRestaurantCard = () => {
  return (
    <div className="w-full flex flex-col gap-4 p-4">
      <div className=" bg-slate-300 h-[150px]" />
      <div className="flex flex-col gap-4">
        <section className="flex flex-col gap-4">
          <div className="bg-slate-300 w-[70%] h-[16px]" />
          <div className="bg-slate-300 w-[50%] h-[14px]" />
        </section>
        <section className="flex justify-between">
          <div className="bg-slate-300 w-[22%] h-[14px]" />
          <div className="bg-slate-300 w-[22%] h-[14px]" />
          <div className="bg-slate-300 w-[22%] h-[14px]" />
        </section>
      </div>
    </div>
  )
}

const ShimmerHomePage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className={`${style.boxWidth} ${style.paddingX} flex flex-col`}>
        <ShimmerRestaurantNavBar />
        <div className="my-8 grid xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-6 lg:gap-4 lg:gap-6">
          {Array(15)
            .fill("")
            .map((element, index) => (
              <ShimmerRestaurantCard key={index} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default ShimmerHomePage
