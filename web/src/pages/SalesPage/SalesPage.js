import FrameLayout from 'src/layouts/FrameLayout/FrameLayout'

const SalePage = () => {
  return (
    <FrameLayout>
      <h1>Sales Page</h1>
      <p>Bunns for sale</p>
      <div className="cardList">
        <div className="bunnyCard">
          <h3>Somebunny</h3>
          <p>This is a bunny card</p>
        </div>
        <div className="bunnyCard">
          <h3>Somebunny</h3>
          <p>This is a bunny card</p>
        </div>
        <div className="bunnyCard">
          <h3>Somebunny</h3>
          <p>This is a bunny card</p>
        </div>
        <div className="bunnyCard">
          <h3>Somebunny</h3>
          <p>This is a bunny card</p>
        </div>
      </div>
    </FrameLayout>
  )
}

export default SalePage
