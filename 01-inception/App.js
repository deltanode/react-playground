const heading1 = React.createElement("h1", { class: "orange-color" }, "Hello React (using React)")
const heading2 = React.createElement("h2", { class: "yellow-color" }, "heading 2 (nested react element)")

const wrapper = React.createElement("div", { id: "wrapper" }, [heading1, heading2])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(wrapper)
