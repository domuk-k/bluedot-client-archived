import { ListItem, UnorderedList } from '@chakra-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const MenuListItems: React.FC = ({ children }) => (
  <ListItem listStyleType="none" marginRight="20px">
    {children}
  </ListItem>
);

interface Props {}

const NavList = (props: Props) => {
  return (
    <UnorderedList display="flex" flexGrow={1}>
      <MenuListItems>
        <Link to="/">홈</Link>
      </MenuListItems>
      <MenuListItems>
        <Link to="/videos">닷비디오</Link>
      </MenuListItems>
      <MenuListItems>
        <Link to="/following">팔로우</Link>
      </MenuListItems>
    </UnorderedList>
  );
};

export default NavList;
