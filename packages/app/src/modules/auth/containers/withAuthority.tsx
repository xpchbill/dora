import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User, Token } from '../../../types';
import { Loading } from '../../../components';
import { RootState } from '../../../store/rootReducer';
import { fetchAuthUserActionCreator } from '../../../store/auth/auth.actions';

export type AuthorityProps = {
  token?: Token;
  currentUser?: User;
  loading?: boolean;
};

let isLoading = false;

export const withAuthority = <P extends any>(
  Component: React.ComponentType<P>,
) => {
  const Container = (props: any) => {
    const dispatch = useDispatch();

    const { token, user, loading } = useSelector(
      (state: RootState) => state.auth,
    );

    if (token && !user && !isLoading) {
      dispatch(fetchAuthUserActionCreator());
      isLoading = true;
    }

    if (token && user) {
      isLoading = false;
    }

    if (isLoading) {
      return <Loading />;
    }

    return (
      <>
        {/* { loading &&  <Loading />} */}
        <Component {...(props as P)} token={token} currentUser={user} />
      </>
    );
  };

  return Container;
};
