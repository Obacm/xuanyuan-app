export const storage = {
  set (key, value) {
    if (window.localStorage && value) {
      window.localStorage.setItem(key, value);
    }
  },
  get (key) {
    if (window.localStorage) {
      let value = window.localStorage.getItem(key)
      return value;
    }
  },
  remove (key) {
    if (window.localStorage) {
      window.localStorage.removeItem(key);
    }
  },
  setObj (key, obj) {
    if (window.localStorage && obj && typeof obj === 'object') {
      obj = JSON.stringify(obj);
      window.localStorage.setItem(key, obj);
    }
  },
  getObj (key) {
    if (window.localStorage) {
      let value = JSON.parse(window.localStorage.getItem(key))
      return value;
    }
  }
}