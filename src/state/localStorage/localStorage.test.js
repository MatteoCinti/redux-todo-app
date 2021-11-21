import { renderHook, act } from "@testing-library/react-hooks";

import { loadLocaStorageState, saveStateToLocaStorage } from './';


const TEST_KEY = "state";
const TEST_VALUE = { test: "test" };

describe("useStateWithLocalStorage", () => {
  it("should set localStorage with default value", () => {
    saveStateToLocaStorage(TEST_VALUE);
    expect(JSON.parse(localStorage.getItem('state'))).toEqual(TEST_VALUE);
  });

  it("should load the proper data from localStorage", () => {
    localStorage.setItem(TEST_KEY, JSON.stringify(TEST_VALUE));

    const result  = loadLocaStorageState()
    expect(result).toEqual(TEST_VALUE);

    // expect value to be taken from localStorage (rather than empty object)
    expect(JSON.parse(localStorage.getItem(TEST_KEY))).toEqual(TEST_VALUE);
  });
});