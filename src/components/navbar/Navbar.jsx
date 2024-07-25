import data from "./data"
import { 
  NavbarList, 
  NavbarListItem,
  NavResponsive,
  NavResponsiveContent
} from "./Navbar.style"
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

  function openMenu() {
    document.getElementById('MenuHamburguer').style.width = '100%'
  }

  function closeMenu() {
    document.getElementById('MenuHamburguer').style.width = '0%'
  }

  return (
    <NavbarList>
      {data.map((item) => (
        <NavbarListItem 
          key={item.id} 
          href={item.itemLink}
        >
          {item.itemName}
        </NavbarListItem>
      ))}

      <IoMenu onClick={openMenu}/>
      <NavResponsive id="MenuHamburguer">
        <IoMdClose onClick={closeMenu} />

        <NavResponsiveContent>
        {data.map((item) => (
            <a 
              key={item.id} 
              href={item.itemLink} 
              onClick={closeMenu}
            >
                {item.itemName}
            </a>
        ))}
        </NavResponsiveContent>
      </NavResponsive>
    </NavbarList>
  )
}

export default Navbar
