import React, { useRef, useState } from "react";
import { useEffect } from "react";
import EmailEditor from "react-email-editor";
import { useFormik } from "formik";
import * as yup from "yup";

const schema = yup.object({
  // design: yup.string().required(),
  // html: yup.string().required(),
});

let InitialData = {
  html: "",
  design: {},
};

const AdvancedEditor = () => {
  const emailEditorRef = useRef(null);
  const [isReady, setReady] = useState(false);
  const [initialValues, setInitialValues] = useState(InitialData);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const onReady = () => {
    // editor is ready
    // you can load your template here;
    if (!isReady) {
      setReady(true);
      if (Object.keys(formik?.values?.design).length) {
        emailEditorRef.current.editor.loadDesign(formik?.values?.design);
      }
    }
  };

  useEffect(() => {
    if (isReady && emailEditorRef?.current) {
      emailEditorRef.current.addEventListener(
        "design:updated",
        function (data) {
          emailEditorRef.current.editor.exportHtml((data) => {
            const { design, html } = data;
            formik.setFieldValue("design", design);
            formik.setFieldValue("html", html);
          });
        }
      );
    }
  }, [emailEditorRef, isReady, formik]);

  const handleReset = () => {
    setInitialValues(InitialData);
    formik.handleReset();
  };

  return <EmailEditor ref={emailEditorRef} onReady={onReady} />;
};

export default AdvancedEditor;
