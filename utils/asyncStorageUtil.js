import AsyncStorage from "@react-native-async-storage/async-storage";

const asyncKey = "cart"

export const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(asyncKey);
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        throw e;
        // error reading value
    }
};

export const addData = async (newValue) => {
    try {
        const currentData = await getData(asyncKey);
        currentData.push(newValue)
        const jsonValue = JSON.stringify(currentData);
        await AsyncStorage.setItem(asyncKey, jsonValue);
    } catch (e) {
        // saving error
        throw e;
    }
};

export const removeAll = async () => {
    try {
        await AsyncStorage.removeItem(asyncKey);
    } catch (e) {
        // saving error
        throw e;
    }
}

export const removeOne = async (id) => {
    try {
        var currentData = await getData(asyncKey);
        var newData = currentData.filter((item) => item.id !== id)
        // console.log(newData)
        await AsyncStorage.setItem(key, JSON.stringify(newData))
    } catch (e) {
        // saving error
        throw e;
    }
}