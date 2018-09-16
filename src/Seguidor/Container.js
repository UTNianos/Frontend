import { connect } from 'react-redux';
import Seguidor from './Seguidor';

import {
  REQUEST_MATERIAS,
  REQUEST_ESTADO,
  REQUEST_CORRELATIVAS,
  UPDATE_ESTADO,
  updateEstadoMateria
} from './Actions';

import getMateriasEstado from './Selector';

const mapStateToProps = state => ({
  materias: getMateriasEstado(state),
  isFetching: state.seguidor.isFetching,
  error: state.seguidor.error,
  estados: state.seguidor.estados
})

const mapDispatchToProps = dispatch => ({
  onLoad: () => {
    dispatch({type: REQUEST_MATERIAS});
    dispatch({type: REQUEST_ESTADO});
    dispatch({type: REQUEST_CORRELATIVAS});
  },
  updateEstado: (materiaEstado) => {
    dispatch({type: UPDATE_ESTADO, materiaEstado: materiaEstado});
  }
})

const SeguidorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Seguidor);

export default SeguidorContainer;
