import { useState } from "react";

function useRegister() {
  const [errors, setErrors] = useState({});


  const validate = (form) => {
    const errorsBag = {};



    if (!/\S+@\S+\.\S+/.test(form.email)) {
      errorsBag.email = "Email format is invalid";
    }

    // return true; // laikinai

    if (Object.keys(errorsBag).length === 0) {
      setErrors({});
      return true;
    } //tikrinam kokie yra key yra tam objekte. taip galima tikrinti ar jis tuscias ar ne.

    setErrors(errorsBag);
    return false;
  };

  return { errors, validate};
}

export default useRegister;
