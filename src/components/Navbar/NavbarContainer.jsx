import { connect } from 'react-redux';
import Navbar from './Navbar';

let mapStateToProps = (state) => {
    return {
        navbarItems: state.navBar.navbarItems,
        dialogsData: state.dialogsPage.dialogsData
    }
}
const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;