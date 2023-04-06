/**
 * We created the "Accordion" in InstaMart Component
 *
 * Now, to create "Controlled Accordion", we have modify the "state" of sibiling <Section/>
 * But, we can't directly modify the state of another sibiling from on component.
 *
 * So, Solution is that, we should maintain the "state" in the parent (i.e <InstaMart/>)
 * This concept is known as "Lifting the state up"
 *
 * Now, refer "InstaMart2.js"
 *  */

import { useState } from "react"

const Section = props => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="my-6 border p-3">
      <h2 className="text-orange-500 text-xl font-medium">{props.title}</h2>
      {isVisible && <p>{props.description}</p>}
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

const InstaMart = () => {
  const description = "Lorem ipsum dolor sit amet consectetur, Ex dolort quidem hic doloribus voluptate ipsum natus harum, repellat, eius recusandae optio enim aperiam explicabo officia consectetur tenetur saepe quis fugiat minima provident! Odio alias neque provident nulla? Harum ab alias optio sed, sequi officia laboriosam delectus, quidem hic, itaque praesentium esse saepe."
  return (
    <div className="w-[1024px] mx-auto my-4">
      <h2 className="text-xl font-semibold py-2">Insta Mart </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugit sit numquam neque et voluptates animi dolorem veritatis ducimus. Commodi. </p>

      <Section title="About Instamart" description={description} />
      <Section title="Team Instamart" description={description} />
      <Section title="Product Instamart" description={description} />
    </div>
  )
}

export default InstaMart
