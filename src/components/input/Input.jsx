import React, { useId, forwardRef } from "react";
import { Label, Wrapper, InputField } from "./style";

function Input({ label, type = "text", ...props }, ref) {
  const id = useId();

  return (
    <Wrapper>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputField
        type={type}
        {...props}
        id={id}
        ref={ref}
      />
    </Wrapper>
  );
}

export default forwardRef(Input);
