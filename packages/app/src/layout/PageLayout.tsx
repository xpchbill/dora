import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { AppProvider, AppConsumer } from '../components';
import { User } from '../types';
import MainLayout from './MainLayout';
import TopNavigation from './TopNavigation';
import MainContent from './MainContent';

type PageLayoutProps = {
  currentUser?: User;
  children?: React.ReactNode;
};

export const PageLayout: React.FC = (props: PageLayoutProps) => {
  const { loading = false } = useSelector(
    (state: RootState) => state.common,
  );

  return (
    <AppProvider
      isGlobalLoading={loading}
      currentUser={props.currentUser}
    >
      <AppConsumer>
        {() => (
          <MainLayout>
            <TopNavigation />
            <MainContent children={props.children} />
          </MainLayout>
        )}
      </AppConsumer>
    </AppProvider>
  );
};

export default PageLayout;
