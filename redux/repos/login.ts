/*
  Optei por utilizar o duck pattern para criar os reducers e actions.
  Com isso, tanto os tipos das actions e os action creators quanto os reducers são criados
  em um arquivo único, facilitando a leitura e manutenção do código.
*/

const typesPrefix = '@login';

export const types = {
  SET_TOKEN: `${typesPrefix}/SET_TOKEN`,
};

const INITIAL_STATE = {
  token: '',
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export const setToken = (token: string) => ({
  type: types.SET_TOKEN,
  payload: token,
});

export const allActions = {
  setToken,
};
