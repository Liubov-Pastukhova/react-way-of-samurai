import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Friends from './Friends';

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData
    }
}

export default compose(
    connect(mapStateToProps),
    withAuthRedirect
)(Friends)