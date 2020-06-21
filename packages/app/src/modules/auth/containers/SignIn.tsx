import React from 'react';
// import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SignIn } from '../components';
import { RouterProps } from '../../../types';
import { SignInValues } from '../types';
import { RootState } from '../../../store/rootReducer';
import { fetchTokenActionCreator } from '../../../store/auth';

const SignInContainer = (props: RouterProps) => {
  // const history = useHistory();
  const dispatch = useDispatch();
  const { loading, username, password, rememberMe } = useSelector(
    (state: RootState) => state.auth,
  );
  const onSubmit = ({ username, password, rememberMe }: SignInValues) =>
    dispatch(fetchTokenActionCreator(username, password, rememberMe));

  return (
    <SignIn
      loading={loading}
      username={username}
      password={password}
      rememberMe={rememberMe}
      onSubmit={onSubmit}
    />
  );
};

export default withRouter(SignInContainer);
