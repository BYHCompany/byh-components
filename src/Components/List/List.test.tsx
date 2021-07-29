import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { List } from './List';

describe('List', () => {
  const list = [
    {
      id: 1,
      name: 'Abath',
    },
    {
      id: 2,
      name: 'Alfa Romeo',
    },
  ];

  const getList = () => {
    const [clicked, setClicked] = React.useState<number>();
    return render(
      <List
        list={list}
        clicked={clicked}
        setClicked={setClicked}
        callback={() => {}}
        fontSize={30}
      />,
    );
  };

  const getOneItem = (testId: string) => {
    const { getAllByTestId } = getList();
    const Arr = getAllByTestId(testId);
    return Arr;
  };

  it('List component should render in the document', () => {
    const listArr = getOneItem('list');
    expect(listArr[0]).toBeInTheDocument();
  });
  it('after click selected ListItem should change fontWeight', () => {
    const listArr = getOneItem('list');
    userEvent.click(listArr[0]);
    expect(listArr[0]).toHaveStyle({
      fontWeight: 900,
    });
  });
  it('after click should be rendered ', () => {
    const { getAllByTestId } = getList();
    const listArr = getOneItem('list');
    userEvent.click(listArr[0]);
    const iconArr = getOneItem('icon');
    expect(iconArr[0]).toBeInTheDocument();
  });
  it('list font size should be 30px ', () => {
    const listArr = getOneItem('list-wrapper');
    expect(listArr[0]).toHaveStyle({
      fontSize: '30px',
    });
  });
});
