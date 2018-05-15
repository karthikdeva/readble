import moment from "moment";

export const camelCaseToSentanceCase = stringValue => {
  if (!stringValue) return;
  return stringValue
    .replace(/([A-Z][a-z])/g, " $1")
    .replace(/^./, str => str.toUpperCase());
};

export const capitalize = (str = "") => {
  return typeof str !== "string" ? "" : str[0].toUpperCase() + str.slice(1);
};

export const getPostedTime = timestamp => {
  return moment(timestamp).fromNow();
};
