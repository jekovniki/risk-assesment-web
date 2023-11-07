class Storage {
    static get(key) {
        return window.localStorage.getItem(key);
    }

    static set(key, value) {
        return window.localStorage.setItem(key, value);
    }

    static remove(key) {
        return window.localStorage.removeItem(key);
    }
}

export default Storage;