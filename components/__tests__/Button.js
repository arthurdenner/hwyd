import React from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import { Button, ButtonText } from '../Button';
import theme from '../../utils/theme';

describe('<Button />', () => {
  it('renders a transparent button (no background color)', () => {
    const tree = shallow(
      <ThemeProvider theme={theme}>
        <Button.Transparent>
          <Text>Press Me</Text>
        </Button.Transparent>
      </ThemeProvider>,
    );
    const root = tree.find(Button.Transparent).shallow();
    expect(root).toMatchSnapshot();
  });
});
