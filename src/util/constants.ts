export const bytebinUrl = getDataSubdomain();
export const postUrl = bytebinUrl + 'post';

function getDataSubdomain(): string {
  let domainParts = document.location.host.split(".");
  domainParts[0] = "bytebin";
  return domainParts.join(".") + "/";
}
