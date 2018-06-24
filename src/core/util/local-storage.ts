import LZString from 'lz-string/libs/lz-string.js';
import * as _ from 'lodash';

const localData = {
    hname: location.hostname ? location.hostname : 'localStatus',
    set: function (key: string, value, uncompress = false) {
        if (_.isString(value) && !uncompress) {
            value = LZString.compressToUTF16(value);
        }
        window.localStorage.setItem(key, value);
    },
    get: function (key: string, uncompress = false): string {
        const value = window.localStorage.getItem(key);
        if (_.isString(value) && !uncompress) {
            return LZString.decompressFromUTF16(value);
        } else {
            return value;
        }
    },
    remove: function (key) {
        localStorage.removeItem(key);
    },
    clear: function () {
        localStorage.clear();
    }
};

export default localData;
