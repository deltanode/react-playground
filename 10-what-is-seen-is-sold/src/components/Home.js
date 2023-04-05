import RestaurantCard from "./RestaurantCard"

const Home = () => {
  return (
    <div className="">
      <main className="w-[1024px] mx-auto my-4 p-2 bg-slate-0">
        {/* ----Search---- */}
        <div className="flex justify-center my-6">
          <form action="">
            <input className="border-2 w-96" type="text" />
            <button className="btn btn-hover ">Search</button>
          </form>
        </div>

        {/* ----Restaurants---- */}
        <div className="flex flex-wrap m-2">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </main>
    </div>
  )
}

export default Home
