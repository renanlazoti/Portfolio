import data from "./data"
import { 
  NavbarList, 
  NavbarListItem 
} from "./Navbar.style"

const Navbar = () => {
  return (
    <NavbarList>
      {data.map((item) => (
        <NavbarListItem href={item.itemLink}>{item.itemName}</NavbarListItem>
      ))}
    </NavbarList>
  )
}

export default Navbar
