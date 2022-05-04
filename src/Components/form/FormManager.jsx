import { Formik, Form } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import dataFields from "../../data/data-fields.json";
import { buildFields } from "../../utils/buildFields";
import { TextInputs } from "../Fields/TextInputs";
import { LinkManager } from "../Link/LinkManager";

export const FormManager = ({ pageName, title }) => {
  const fieldsPage = buildFields(pageName).initialFields;
  const validationSchema = Yup.object({
    ...buildFields(pageName).validationsFields,
  });
  return (
    <>
      <h1 className="form__manager__title">{title}</h1>
      <div className="form__manager__content">
        <Formik
          validationSchema={validationSchema}
          onSubmit={(values) => console.log("This are the values", values)}
          initialValues={fieldsPage}
        >
          {({ errors }) => (
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
                }) =>
                  fieldShouldShow[pageName] ? (
                    <TextInputs
                      key={id}
                      name={name}
                      value={value}
                      type={type}
                      label={label}
                      validations={validations}
                      errors={errors}
                    />
                  ) : null
              )}
              <Button variant="contained" type="submit">
                {pageName}
              </Button>
            </Form>
          )}
        </Formik>
        <LinkManager pageName={pageName} />
      </div>
    </>
  );
};

FormManager.propTypes = {
  pageName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
