/*
  Optei por utilizar o duck pattern para criar os reducers e actions.
  Com isso, tanto os tipos das actions e os action creators quanto os reducers são criados
  em um arquivo único, facilitando a leitura e manutenção do código.
*/

const typesPrefix = '@login';

export const types = {
  SET_TOKEN: `${typesPrefix}/SET_TOKEN`,
  SET_LOADING: `${typesPrefix}/SET_LOADING`,
  GET_TOKEN_ASYNC: `${typesPrefix}/GET_TOKEN_ASYNC`,
};

const INITIAL_STATE = {
  token: '',
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_TOKEN:
      return { ...state, token: action.payload };
    case types.SET_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export const setToken = (token: string) => ({
  type: types.SET_TOKEN,
  payload: token,
});

export const setIsLoading = (isLoading: boolean) => ({
  type: types.SET_LOADING,
  payload: isLoading,
});

export const getLoginAsync = () => ({
  type: types.GET_TOKEN_ASYNC,
});

export const allActions = {
  setToken,
  setIsLoading,
  getLoginAsync,
};
