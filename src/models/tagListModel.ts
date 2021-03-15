const localStorageKeyName = "tagList";

type TagListModel = {
  data: string[];
  fetch: () => string[];
  createTag: (name: string) => "duplicated" | "success";
  save: () => void;
}

const initData = "[\"衣\",\"食\",\"住\",\"行\"]";

const tagListModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem("tagList") || initData);
    return this.data;
  },
  createTag(name: string) {
    if (this.data.includes(name)) return "duplicated";
    else {
      this.data.push(name);
      this.save();
      return "success";
    }
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export {tagListModel};