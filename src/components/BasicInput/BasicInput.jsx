import { TextField } from "@mui/material";
const BasicInput = ({ error, helperText, field }) => {
  return (
    <>
      <TextField
        {...field}
        error={error}
        helperText={helperText}
        placeholder="First name"
      />
    </>
  );
};
export default BasicInput;
