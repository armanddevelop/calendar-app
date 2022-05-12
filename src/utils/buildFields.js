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
  emailField: "email",
};
const buildValidations = (validationsArr, nameField, field) => {
  let stringYup = Yup.string();
  let dateYupStart = Yup.date();
  let dateYupEnd = Yup.date();
  const { required, minLength, maxLength, sameField, emailField } =
    typesDicctionaryValidations;
  for (const rule of validationsArr) {
    if (rule.type === required && field !== "date") {
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
    if (rule.type === emailField) {
      stringYup = stringYup.email(rule.description);
    }
    if (rule.type === required && field === "date") {
      if ("dateStart" === nameField) {
        dateYupStart = dateYupStart.required();
        validationsFields[nameField] = dateYupStart;
      }

      if ("dateEnd" === nameField) {
        dateYupEnd = dateYupEnd.when("dateStart", (startDate, schema) => {
          return (
            startDate &&
            schema.min(
              startDate,
              `${rule.description} ${moment(startDate).format("LLL")}`
            )
          );
        });
        validationsFields[nameField] = dateYupEnd;
      }
    }
  }
  if (field !== "date") validationsFields[nameField] = stringYup;
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
        buildValidations(validations, name, field);
      }
    }
  }
  return { initialFields, validationsFields };
};
