export const setCookie = (key, value, t) => {
  const oDate = new Date()
  oDate.setDate(oDate.getDate() + t)
  document.cookie = key + '=' + encodeURI(value) + ';expire=' + oDate.toGMTString()
}
