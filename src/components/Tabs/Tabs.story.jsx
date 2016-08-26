import React from 'react';
import hoistStatics from 'hoist-non-react-statics';
import storiesOf from '../../utils/storiesOf.js';

import Tabs from '.';

const sampleTabs = [
  {
    id: 1,
    title: 'First tab'
  },
  {
    id: '2',
    title: 'Second tab'
  },
  {
    id: '3',
    title: 'Third tab'
  }
];
const renderer = activeId => <b>{activeId}</b>;
const index = 1;

const wrapper = WrappedComponent => {
  class WrapperTabs extends React.Component {
    static displayName = 'Wrapper';

    state = {
      activeId: 0
    }

    handleChange = newActiveId => {
      this.setState({
        activeId: newActiveId
      });
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          onChange={this.handleChange}
          activeId={this.state.activeId}
        />
      );
    }
  }
  const result = hoistStatics(WrapperTabs, WrappedComponent);
  return result;
};

const Test = wrapper(Tabs);

storiesOf('Tabs')
  .addWithInfo('Default without props', () => (
    <Tabs />
  ))
  .addWithInfo('Default with children', () => (
    <Tabs>Tabs</Tabs>
  ))
  .addWithInfo('Default with Hello word', () => (
    <Tabs>Hello</Tabs>
  ))
  .addWithInfo('Default with Hello word', () => (
    <Tabs
      tabs={sampleTabs}
      activeId={sampleTabs[index].id}
      renderer={renderer}
    />
  ))
  .addWithInfo('Default with state', () => {
    return (
      <Test
        tabs={sampleTabs}
        renderer={renderer}
      />
    );
  });
