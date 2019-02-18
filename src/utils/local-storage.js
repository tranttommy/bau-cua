function getData(key) {
    let array = [];
    const json = localStorage[key];
    if(json) {
        array = JSON.parse(json);
    }
    return array;
}

function storeData(key, object) {
    const array = getData(key);
    array.push(object);
    const json = JSON.stringify(array);
    window.localStorage[key] = json;
}

export default {
    get: getData,
    store: storeData
};