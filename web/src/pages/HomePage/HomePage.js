import FrameLayout from 'src/layouts/FrameLayout'

import img from 'src/images/profile_pic.jpg'
const HomePage = () => {
  return (
    <FrameLayout>
      <h1>HomePage</h1>
      <h2>Bunnies</h2>
      <img src={img} alt="Profile" height="300px" />
    </FrameLayout>
  )
}

export default HomePage
