class CookieUtil {
    static save(key: string, value: string) {
        const encodedValue: string = encodeURIComponent(value);
        document.cookie = `${key}=${encodedValue}`;
    }

    static getOrElse(key: string, defaultValue: string) {
        const cookieValue: string = document.cookie.replace("/(?:(?:^|.*;\s*)" + key + "\s*\=\s*([^;]*).*$)|^.*$/", "$1");
        return !cookieValue ? decodeURIComponent(cookieValue) : defaultValue;
    }

    static remove(key: string) {
        document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }

    static exists(key: string) {
        return document.cookie.split(';')
            .filter((item) => item.trim().startsWith(`${key}=`))
            .length
    }
}

export default CookieUtil;