const Button = ({ label, iconURL}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full`}>
        {label}
        {iconURL && 
            <img 
                src={iconURL}
                alt="Arrow Button"
                className="ml-2 rounded-full bg-white w-5 h-5"
            />
        }
    </button>
  )
}

export default Button