import { connect } from "react-redux"
import { PopSignup } from 'components/atoms/PopSignup'
import * as actions from 'store/actions'


const mapDispatchToProps = dispatch => ({
  toggleModal: (modalOpened) => dispatch(actions.toggleModal(modalOpened)),
})

const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(PopSignup)