import { React, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
    display: ${(props) => (props.isOpen ? "flex" : "none")};
  }
`;
const ListItem = styled.li`
  margin-right: 10px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 5px;
  }
`;

const SearchInput = styled.input`
  margin-right: 10px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 10px;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer>
      <h1>Modify</h1>
      <HamburgerButton onClick={toggleMenu}>
        <RxHamburgerMenu />
      </HamburgerButton>

      <form action="">
        <SearchInput type="text" name="Search" id="" placeholder="Search" />
      </form>

      <List isOpen={isMenuOpen}>
        <ListItem>T-Shirts</ListItem>
        <ListItem>Hoodies</ListItem>
        <ListItem>Jeans</ListItem>
        <ListItem>Caps</ListItem>
        <ListItem>Jackets</ListItem>
      </List>
      <button>My Cart</button>
      <button>Login</button>
    </NavbarContainer>
  );
}

export default Navbar;
