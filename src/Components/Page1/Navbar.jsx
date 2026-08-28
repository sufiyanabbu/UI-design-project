import NavbarButton from "./NavbarButton"
import NavbarText from "./NavbarText"

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-8 px-18'>
      <NavbarText />
      <NavbarButton />
    </div>
  )
}

export default Navbar
