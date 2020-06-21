import React from 'react';
import { Loading } from '../loading';
import { User } from '../../types';

interface AppProviderProps {
  currentUser?: User;
  isGlobalLoading?: boolean;
}
interface AppProviderState {
  currentUser?: User;
  isGlobalLoading?: boolean;
}

interface ContextStore extends AppProviderState {
  currentUser?: User;
  isGlobalLoading?: boolean;
}

const AppContext = React.createContext({} as ContextStore);

export const AppConsumer = AppContext.Consumer;

export class AppProvider extends React.Component<
  AppProviderProps,
  AppProviderState
> {
  constructor(props: AppProviderProps) {
    super(props);

    this.state = {
      currentUser: props.currentUser,
      isGlobalLoading: props.isGlobalLoading,
    };
  }

  public render() {
    const { currentUser, isGlobalLoading } = this.props;

    return (
      <AppContext.Provider
        value={{
          currentUser,
          isGlobalLoading,
        }}
      >
        { isGlobalLoading && <Loading /> }
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
