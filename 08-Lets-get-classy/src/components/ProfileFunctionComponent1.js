// passing props from parent to child

const ProfileFunctionalComponent1 = props => {
  return (
    <div>
      <hr />
      <h3>Profile: Functional Component</h3>
      <p>NAME: {props.name}</p>
      <p>ADDRESS: {props.address}</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <hr />
    </div>
  )
}

export default ProfileFunctionalComponent1
