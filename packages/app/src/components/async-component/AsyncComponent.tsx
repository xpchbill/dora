import React from 'react';
import { Loading } from '../loading';

export const AsyncComponent = (importComponent: any) => {
  class AsyncComponentWrapper extends React.Component<any, { component: any }> {
    constructor(props: any) {
      super(props);

      this.state = {
        component: null,
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({ component });
    }

    render() {
      const Comp = this.state.component;

      if (Comp) {
        return <Comp {...this.props} />;
      }

      return <Loading />;
    }
  }

  return AsyncComponentWrapper;
};
