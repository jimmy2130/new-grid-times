import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DesktopActionGroup>
        <Logo />
        <SubscribeWrapper>
          <Button>Subscribe</Button>
          <SubLink href="#">Already a subscriber?</SubLink>
        </SubscribeWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  /*border: 1px solid green;*/

  @media ${QUERIES.tabletAndUp} {
  margin-top: 48px;
  margin-bottom: 72px;    
  }

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    align-items: center;
    justify-content: start;
    grid-template-columns: 1fr auto 1fr;
    margin-top: 16px;
    margin-bottom: 72px;
  }
`;

const DesktopActionGroup = styled(ActionGroup)`
  display: none;
  /*border: 1px solid;*/
  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`

const SubscribeWrapper = styled.div`
  display: none;
  /*border: 1px solid;*/

   @media ${QUERIES.laptopAndUp} {
    justify-self: end;
    display: revert;
    position: relative;
    
  }
`

const SubLink = styled.a`
  position: absolute;
  margin-top: 8px;
  width: 100%;
  text-align: center;
  font-family: var(--font-family-serif);
  font-size: calc(14 / 16 * 1rem);
  font-style: italic;
  text-decoration: underline;
  color: var(--color-gray-900);
`

export default Header;
