import keplerGlReducer from "kepler.gl/reducers";

const keplerReducer = keplerGlReducer.initialState({
  uiState: {
    activeSidePanel: null,
    currentModal: null,
  },
});

export default keplerReducer;
