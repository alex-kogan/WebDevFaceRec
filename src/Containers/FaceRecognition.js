import {connect} from 'react-redux';

import FaceRecognitionBox from '../Components/FaceRecognitionBox/FaceRecognitionBox';

const mapStateToProps = (state) => {
  return {
    imageURL: state.detectionButton.imageURL,
    isDetecting: state.detectionButton.isDetecting,
    detectionBoxArray: state.detectionButton.detectedFaces,
  }
}

export default connect(mapStateToProps)(FaceRecognitionBox);