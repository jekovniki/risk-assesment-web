import Storage from "./storage";

export function setUserInNav(userData) {
    Storage.set('userData', JSON.stringify({
        name: userData.firstName + " " + userData.lastName,
        email: userData.email,
    }));
}

export function getUserNavData() {
    const data = Storage.get('userData');

    return JSON.parse(data);
}