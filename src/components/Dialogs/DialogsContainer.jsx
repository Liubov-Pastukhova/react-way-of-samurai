import { connect } from 'react-redux';
import { compose } from 'redux';
import {sendMessage, updateNewMessageText} from '../../data/dialogsPage-reducer';
import { withAuthRedirect}  from '../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default compose(
    connect(mapStateToProps, {updateNewMessageText, sendMessage}),
    withAuthRedirect
)(Dialogs);