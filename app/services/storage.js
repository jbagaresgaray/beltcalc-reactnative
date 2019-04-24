import AsyncStorage from "@react-native-community/async-storage";

export const setLocalStorage = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, data);
  } catch (e) {
    // saving error
  }
};

export const getLocalStorage = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // value previously stored
      return value;
    }
  } catch (e) {
    // error reading value
  }
};

export const removeLocalStorage = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
  }
};
