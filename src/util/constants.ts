export const bytebinUrl = getDataSubdomain();
export const postUrl = bytebinUrl + 'post';

function getDataSubdomain(): string {
  let domainParts = document.location.host.split(".");
  domainNames[0] = "bytebin";
  return domainNames.toString().replaceAll(",", ".")
}
