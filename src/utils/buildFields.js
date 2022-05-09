import * as Yup from "yup";
import moment from "moment";
import dataFields from "../data/data-fields.json";
const initialFields = {};
const validationsFields = {};
const typesDicctionaryValidations = {
  required: "required",
  minLength: "minLength",
  sameField: "sameField",
  maxLength: "maxLength",
};
export const buildFields = (pageName) => {
  for (const data of dataFields) {
    let stringYup = Yup.string();
    const { name, value, fieldShouldShow, validations, field } = data;
    const { required, minLength, maxLength, sameField } =
      typesDicctionaryValidations;
    if (fieldShouldShow[pageName]) {
      if (field === "date") {
        initialFields[name] = moment(new Date());
      }
      if (field !== "date") {
        initialFields[name] = value;
      }
      if (validations.length > 0) {
        for (const rule of validations) {
          if (rule.type === required) {
            stringYup = stringYup.required(rule.description);
          }
          if (rule.type === minLength) {
            stringYup = stringYup.min(rule.min, rule.description);
          }
          if (rule.type === maxLength) {
            stringYup = stringYup.max(rule.max, rule.description);
          }
          if (rule.type === sameField) {
            stringYup = stringYup.test(
              "password-match",
              rule.description,
              function (value) {
                return this.parent.password === value;
              }
            );
          }
          if (rule.type === "email") {
            stringYup = stringYup.email(rule.description);
          }
        }
        validationsFields[name] = stringYup;
      }
    }
  }
  return { initialFields, validationsFields };
};
