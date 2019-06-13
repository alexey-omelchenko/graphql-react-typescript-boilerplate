import React from 'react';
import { shallow } from 'enzyme';
import activities from 'graphql/mock-data/activities';
import Table from './table';

test('table renders', () => {
  const TableNode = shallow(<Table activities={activities} />);
  expect(TableNode).toBeTruthy();
});
