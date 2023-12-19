import { foodLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a className='flex justify-start items-center' href="/">
                <img 
                    src={foodLogo}
                    alt='logo'
                    width={50}
                    height={50}
                    className='mr-4'
                />
                <h2 
                    className='text-amber-900 text-2xl'
                >
                    Green Food
                </h2>
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a 
                            href={item.href}
                            className='font-montserrat leading-normal text-lg text-slate-gray'
                            >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="lg:hidden">
                <img 
                    src={hamburger}
                    alt="Hamburguer Icon"
                    width={25}
                    height={25}
                />
            </div>
        </nav>    
    </header>
  )
}

export default Nav