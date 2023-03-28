import { TOTAL_SHIMMER_CARD } from "../Config"

const ShimmerCard = () => {
  return (
    <div className="shimmer__card">
      <div className="shimmer__img animation-gradient"></div>
      <div className="shimmer__div animation-gradient"></div>
      <div className="shimmer__div animation-gradient"></div>
      <div className="shimmer__div animation-gradient"></div>
    </div>
  )
}

const Shimmer = () => {
  return (
    <>
      {Array(TOTAL_SHIMMER_CARD)
        .fill("")
        .map((e, index) => {
          return <ShimmerCard key={index} />
        })}
      <ShimmerCard />
    </>
  )
}

export default Shimmer
