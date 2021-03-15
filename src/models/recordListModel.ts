const localStorageKeyName = "recordList";

const recordListModel = {
  deepClone(data: MyRecord | MyRecord[]) {
    return JSON.parse(JSON.stringify(data));
  },
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || "[]") as MyRecord[];
    // 做好强制类型指定，方便调用。
  },
  save(data: MyRecord[]) {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }
};

export {recordListModel};