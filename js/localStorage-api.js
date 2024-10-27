//console.log(localStorage);
//localStorage.setItem("test", true);
//console.log(localStorage.getItem("test-1"));
//localStorage.setItem("test-2", JSON.stringify([1, 2]));
//console.log(JSON.parse(localStorage.getItem("test-2")));

//const LS_KEY = "test";
//const LS_KEY_VID = "test-2";
export function addDateToLocalStorage(key, value) {
  try {
    const normolizedState = JSON.stringify(value);
    localStorage.setItem(key, normolizedState);
  } catch (error) {
    console.log(error);
  }
}
//addDateToLocalStorage(LS_KEY, false);
//addDateToLocalStorage(LS_KEY_VID, [2, 3]);

export function getDateLocalStorage(key) {
  try {
    const normolizedState = localStorage.getItem(key);
    return normolizedState === null ? undefined : JSON.parse(normolizedState);
  } catch (error) {
    console.log(error);
  }
}

//console.log(getDateLocalStorage(LS_KEY));
//console.log(getDateLocalStorage(LS_KEY_VID));

//console.log(localStorage.getItem("test-3"));

export function removeDateLocalStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
}

//removeDateLocalStorage(LS_KEY);


