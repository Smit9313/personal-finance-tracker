export function loginRedirectCall() {
  let path = window.location.protocol + "//" + window.location.host + "/";
  window.location.href = path;
}
