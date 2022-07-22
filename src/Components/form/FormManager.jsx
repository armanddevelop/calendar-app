import { Formik, Form } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import dataFields from "../../data/data-fields.json";
import { buildFields } from "../../utils/buildFields";
import { TextInputs } from "../Fields/TextInputs";
import { LinkManager } from "../Link/LinkManager";
import { DatePickerComponent } from "../Fields/DatePickerComponent";
import { TextArea } from "../Fields/TextArea";
import { useAuthStore, useCalendarStore } from "../../Hooks";

export const FormManager = ({ pageName, title, handleClose }) => {
  const fieldsPage = buildFields(pageName).initialFields;
  const { startSavingEvent } = useCalendarStore();
  const { startLogin, startRegisterUser } = useAuthStore();
  const validationSchema = Yup.object({
    ...buildFields(pageName).validationsFields,
  });
  return (
    <>
      <h3 className="form__manager__title">{title}</h3>
      <div className="form__manager__content">
        <Formik
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            console.log("esto vale values ", values);
            if (pageName === "modal") {
              await startSavingEvent(values);
              handleClose();
            } else if (pageName === "logIn") {
              await startLogin(values);
            } else if (pageName === "register") {
              await startRegisterUser(values);
            }
          }}
          initialValues={fieldsPage}
        >
          {({ errors, setFieldValue }) => (
            <Form noValidate className="form__manager__fields">
              {dataFields.map(
                ({
                  fieldShouldShow,
                  id,
                  name,
                  value,
                  type,
                  label,
                  validations,
                  field,
                }) => {
                  if (fieldShouldShow?.[pageName]) {
                    if (pageName !== "modal") {
                      return (
                        <TextInputs
                          key={id}
                          name={name}
                          value={value}
                          type={type}
                          label={label}
                          validations={validations}
                          errors={errors}
                          setFieldValue={setFieldValue}
                          pageName={pageName}
                        />
                      );
                    }
                    if (field === "input") {
                      return (
                        <TextInputs
                          key={id}
                          name={name}
                          value={value}
                          type={type}
                          label={label}
                          validations={validations}
                          errors={errors}
                          setFieldValue={setFieldValue}
                          pageName={pageName}
                        />
                      );
                    }
                    if (field === "date") {
                      return (
                        <DatePickerComponent
                          key={id}
                          name={name}
                          label={label}
                          value={value}
                          errors={errors}
                          setFieldValue={setFieldValue}
                        />
                      );
                    }
                    if (field === "textarea") {
                      return (
                        <TextArea
                          key={id}
                          name={name}
                          value={value}
                          label={label}
                          setFieldValue={setFieldValue}
                        />
                      );
                    }
                  }
                  return null;
                }
              )}
              <Button variant="contained" type="submit">
                {pageName !== "modal" ? pageName : "Save Event"}
              </Button>
            </Form>
          )}
        </Formik>
        {pageName !== "modal" && <LinkManager pageName={pageName} />}
      </div>
    </>
  );
};

FormManager.propTypes = {
  pageName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
