import {connect} from 'react-redux';

import {setImageInput, detectImage} from '../Actions'

import ImageLinkForm from '../Components/ImageLinkForm/ImageLinkForm';

const mapStateToProps = (state) => {
  return {
    imageInput: state.imageInput.imageInputField  // state holds the method searchRobots (as a reducres) which holds the method searchField once more reducers are added we need to name from which one we need the state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (event) => dispatch (setImageInput(event.target.value)),
    onDetectClick: () => dispatch(detectImage()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageLinkForm);