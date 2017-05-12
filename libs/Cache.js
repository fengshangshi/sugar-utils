/**
 * @file Cache类
 * @author ss.feng
 */
'use strict'

class Cache {
    constructor() {
        this.data = new Map;
    }

    // 设置
    set(key, value) {
        return this.data.set(key, value);
    }

    // 读取
    get(key) {
        return this.data.get(key);
    }

    // 删除
    delete(key) {
        return this.data.delete(key);
    }

    // 清空
    clear() {
        return this.data.clear();
    }
}

module.exports = Cache;
