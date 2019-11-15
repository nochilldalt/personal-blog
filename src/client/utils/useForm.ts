import { useState } from "react";
import * as React from "react";

const useForm = (cb: any) => {
  const [values, setValues] = useState<{[key:string]:string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setValues(values => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e) e.preventDefault();
    cb()
  };

  return {
    values,
    handleChange,
    handleSubmit
  };
};

export default useForm