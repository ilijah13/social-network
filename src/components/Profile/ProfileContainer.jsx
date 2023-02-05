import React from 'react';
import { useParams } from 'react-router-dom';
import Profile from './Profile';

import { connect } from 'react-redux';
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
  savePhoto,
} from '../../redux/profile-reduser';
import withAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserID;
    }

    // let userId = this.props.router.params.userId;
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }
  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }
  render() {
    return (
      <Profile
        isOwner={!this.props.match.params.userId}
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
        savePhoto={this.props.savePhoto}
      />
    );
  }
}
const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserID: state.auth.userId,
  photo: state.profilePage.photo,
});

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    savePhoto,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
