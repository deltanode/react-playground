/**
 * We created the "Controlled Accordion" in InstaMart2 Component.
 * The logic work's. But, this is the worst way to write code.
 * As, below code is neither readable, nor reusable, nor mantainable
 *
 * Note:
 * - You can't build a large scale application without having a control over proper data machnism.
 * - Data should be very well maintained in our app.
 *
 * We can fix below code, by just tracking one <Section/> at a time i.e
 * We just need to track only one, i.e what i need to show,
 * Instead of tracking them all.
 * So, instead of mantaining the "configs" in state, we should just maintain - what <Section/> is visible.
 *
 * There are multiple ways to do this.
 * 1. Either we can create different keys for our section (Or those keys can be the name of the sectin as well.)
 * i.e Either we can keep indexes for <Section/> or we can keep it as a key for the <Section/>.
 *
 * Now, refer "InstaMart3.js"
 *  */

import { useState } from "react"
import { Link } from "react-router-dom"

const Section = ({ title, description, isVisible, setIsVisible }) => {
  // console.log(title, isVisible)
  return (
    <div className="my-6 border p-3">
      <h2 className="text-orange-500 text-xl font-medium">{title}</h2>
      {isVisible && <p>{description}</p>}
      {isVisible ? (
        <button className="btn2" onClick={() => setIsVisible(false)}>
          Hide
        </button>
      ) : (
        <button className="btn2" onClick={() => setIsVisible(true)}>
          Show
        </button>
      )}
    </div>
  )
}

const InstaMart2 = () => {
  const [sectionConfig, setSectionConfig] = useState({
    showAbout: true,
    showTeam: false,
    showProduct: false
  })
  const description = "Lorem ipsum dolor sit amet consectetur, Ex dolort quidem hic doloribus voluptate ipsum natus harum, repellat, eius recusandae optio enim aperiam explicabo officia consectetur tenetur saepe quis fugiat minima provident! Odio alias neque provident nulla? Harum ab alias optio sed, sequi officia laboriosam delectus, quidem hic, itaque praesentium esse saepe."

  return (
    <div className="w-[1024px] mx-auto my-4">
      <h2 className="text-xl font-semibold py-2">Insta Mart 2</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugit sit numquam neque et voluptates animi dolorem veritatis ducimus. Commodi. </p>
      <p className="my-4">
        Go to{" "}
        <Link to="/instamart" className="text-red-500 underline">
          InstaMart
        </Link>
        {"   |   "}
        <Link to="/instamart2" className="text-red-500 underline">
          InstaMart2
        </Link>
        {"   |   "}
        <Link to="/instamart3" className="text-red-500 underline">
          InstaMart3
        </Link>
      </p>

      <Section
        title="About Instamart"
        description={description}
        isVisible={sectionConfig.showAbout}
        setIsVisible={bool => {
          setSectionConfig({
            showAbout: bool,
            showTeam: false,
            showProduct: false
          })
        }}
      />
      <Section
        title="Team Instamart"
        description={description}
        isVisible={sectionConfig.showTeam}
        setIsVisible={bool => {
          setSectionConfig({
            showAbout: false,
            showTeam: bool,
            showProduct: false
          })
        }}
      />
      <Section
        title="Product Instamart"
        description={description}
        isVisible={sectionConfig.showProduct}
        setIsVisible={bool => {
          setSectionConfig({
            showAbout: false,
            showTeam: false,
            showProduct: bool
          })
        }}
      />
    </div>
  )
}

export default InstaMart2
