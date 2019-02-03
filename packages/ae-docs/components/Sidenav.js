import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { compose, groupBy, propOr } from 'ramda';
import { fromClassPrototype } from 'pipey';

import Link from './Link';
import { RouterContext } from './Router';

const MOBILE_BREAKPOINT = 'max-width: 1100px';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 250px;
  background-color: #fff;
  border-right: 1px solid #eee;
  font-size: 1em;

  @media all and (${MOBILE_BREAKPOINT}) {
    transition: transform .3s ease-in-out;
    transform: translateX(${p => p.isVisible ? '0px' : '-100%'});
    width: 300px;
    font-size: 1.3em;
    box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.05);
  }
`;

const NavBtn = styled.button`
  position: absolute;
  left: 100%;
  top: 0;
  outline: none;
  border: none;
  background-color: #222;
  font-size: .8em;
  padding: .6em .7em;
  cursor: pointer;

  .bar {
    width: 1.7em;
    height: 3px;
    background-color: #fff;
    margin: .3em;
  }

  display: none;

  @media all and (${MOBILE_BREAKPOINT}) {
    display: block;
  }
`;

const Item = styled.div`
  border-right: ${p => p.isCurrentPage ? '3px solid #666' : 'none'};
  background-color: ${p => p.isCurrentPage ? '#f1f1f1' : 'transparent'};

  font-size: .8em;

  &:hover {
    background-color: #f6f6f6;
  }

  a {
    text-decoration: none;
    display: block;
    width: 100%;
    padding: .7em .9em;
  }
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background-color: none;
  border-bottom: 1px solid #ccc;
  display: block;
  width: 100%;
  padding: .5em;
`;

const GroupName = styled.div`
  color: #888;
  text-transform: uppercase;
  font-size: .7em;
  border-bottom: 1px solid #f3f3f3;
  padding: 1.5em 1em 0;
`;

// const BottomBar = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   width: 100%;
//   height: 100%;
//   flex: 0 0 50px;
//   border-top: 1px solid #f3f3f3;

//   font-size: 16px;
// `;
// const IconLink = styled(Link)`
//   color: #555;
// `;

const SidebarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
`;


const { map, filter, sort } = fromClassPrototype(Array);

const isMatch = (term, str) => `${str}`.toLowerCase().indexOf(`${term}`.toLowerCase()) >= 0;

const findMatchingRoutes = term => routes => compose(
  sort((a, b) => a.order - b.order),
  filter(page => !term ? true : (
    isMatch(term, page.title) ||
    isMatch(term, page.key) ||
    isMatch(term, page.description) ||
    isMatch(term, page.keywords)
  )),
  map(key => ({ ...routes[key], key })),
  Object.keys,
)(routes);

const Sidenav = ({ routes }) => {
  const [term, setSearchTerm] = useState('');
  const [isVisible, setNavVisibility] = useState(false);
  const { page: curentPage } = useContext(RouterContext) || {};

  const onSearch = e => setSearchTerm(e.currentTarget.value);

  return (
    <Wrapper isVisible={isVisible}>
      <NavBtn onClick={() => setNavVisibility(!isVisible)}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </NavBtn>
      <SidebarContainer>
        <div>
          <div style={{ padding: '.5em' }}>
            <SearchInput type='text' value={term} onChange={onSearch} placeholder="Search" />
          </div>

          <div style={{ textAlign: 'center', padding: '1em 0' }}>
            algebraic-effects
          </div>

          <div style={{ paddingTop: '.5em' }}>
            {compose(
              map(({ group, items }) => (
                <div key={group}>
                  {group && <GroupName>{group}</GroupName>}
                  {items.map(page => (
                    <Item
                      key={page.key}
                      isCurrentPage={curentPage === page.key}
                      onClick={() => setNavVisibility(false)}
                    >
                      <Link to={page.key}>{page.title}</Link>
                    </Item>
                  ))}
                </div>
              )),
              o => Object.keys(o).map(group => ({ group, items: o[group] })),
              groupBy(propOr('', 'group')),
              findMatchingRoutes(term)
            )(routes)}
          </div>
        </div>

        {/* <BottomBar>
          <IconLink to="https://github.com/phenax" isExternal>Github</IconLink>
          <IconLink to="https://github.com/phenax" isExternal>Twitter</IconLink>
        </BottomBar> */}
      </SidebarContainer>
    </Wrapper>
  );
};

export default Sidenav;
