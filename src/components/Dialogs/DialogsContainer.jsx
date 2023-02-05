import Dialogs from './Dialogs';
import withAuthRedirect from '../hoc/withAuthRedirect';
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/dialogs-reduser';
import { connect } from 'react-redux';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },

    changeMessage: (text) => {
      let action = updateNewMessageTextActionCreator(text);
      dispatch(action);
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
