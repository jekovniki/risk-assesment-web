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

export function setSearch(searchedName) {
    const userData = getUserNavData();
    const latestSearch = getLatestSearch();
    if (!latestSearch) {
        Storage.set(`latestSearches-${userData.email}`, JSON.stringify([searchedName]));

        return;
    }
    latestSearch.push(searchedName);

    Storage.set(`latestSearches-${userData.email}`, JSON.stringify(latestSearch));   
}

export function getLatestSearch() {
    const userData = getUserNavData();
    const latestSearch = Storage.get(`latestSearches-${userData?.email ?? ""}`);

    return latestSearch ? JSON.parse(latestSearch) : null;
}