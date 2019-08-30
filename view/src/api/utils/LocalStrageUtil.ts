class LocalStorageUtil {
    static save(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static getOrElse(key: string, defaultValue: string) {
        const value = localStorage.getItem(key);
        return !value ? defaultValue : value;
    }

    static remove(key: string) {
        localStorage.removeItem(key);
    }

    static exists(key: string) {
        return localStorage.getItem(key);
    }
}

export default LocalStorageUtil;