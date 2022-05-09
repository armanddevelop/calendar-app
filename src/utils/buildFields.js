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
export const buildValidations = (validationsArr, nameField) => {
  let stringYup = Yup.string();
  const { required, minLength, maxLength, sameField } =
    typesDicctionaryValidations;
  for (const rule of validationsArr) {
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
  validationsFields[nameField] = stringYup;
};
export const buildFields = (pageName) => {
  for (const data of dataFields) {
    const { name, value, fieldShouldShow, validations, field } = data;

    if (fieldShouldShow[pageName]) {
      if (field === "date") {
        initialFields[name] = moment(new Date());
      }
      if (field !== "date") {
        initialFields[name] = value;
      }
      if (validations.length > 0) {
        buildValidations(validations, name);
      }
    }
  }
  return { initialFields, validationsFields };
};
