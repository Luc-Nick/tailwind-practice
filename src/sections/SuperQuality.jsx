import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import BtnShop from "../components/BtnShop"

const SuperQuality = () => {
  return (
    <section 
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We provide you
          <span className="text-coral-red inline-block mt-3">&nbsp;Super&nbsp;</span>
          <span className="text-coral-red inline-block mt-3">Quality&nbsp;</span> 
           Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish Nike arrivals, quality comfort, and innovations for your active life.
        </p>
          <div className="mt-11">
            <BtnShop label="View Details" iconURL={arrowRight}/>
          </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img 
          src={shoe8} 
          alt="shoe 8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality