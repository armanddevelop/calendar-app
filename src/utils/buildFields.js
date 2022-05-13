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

function validDate(value) {
  const dateStart = moment(this.parent.dateStart).format("LLL");
  const dateEnd = moment(value).format("LLL");
  return !moment(dateStart).isSame(moment(dateEnd), "minute");
}

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
        dateYupEnd = dateYupEnd
          .when("dateStart", (startDate, schema) => {
            return (
              startDate &&
              schema.min(
                startDate,
                `${rule.mustBeAfterMessage} ${moment(startDate).format("LLL")}`
              )
            );
          })
          .test("datesNotBeEquals", rule.gratherMessage, validDate);
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
        initialFields[name] = moment().minutes(0).second(0).add(1, "hours");
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
