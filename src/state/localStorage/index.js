export const loadLocaStorageState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error(`Could not load data from the local storage. 
    Error: ${err}`);
  };
};

export const saveStateToLocaStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.error(`Could not save data to local storage. 
    Error: ${err}`);
  };
};