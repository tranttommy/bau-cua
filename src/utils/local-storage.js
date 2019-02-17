function getData(key) {
    const json = localStorage[key];
    return JSON.parse(json);
}

function storeData(key, object) {
    const json = JSON.stringify(object);
    window.localStorage[key] = json;
}

export default {
    get: getData,
    store: storeData
};