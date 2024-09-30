import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { isValidNumber } from "libphonenumber-js";
import EnhancedTable from "../../shared/components/TestTable";
const SamplePage = () => {
  const [phoneNo, setPhoneNo] = useState("");
  return (
    <Box p={5}>
      <TextField
        label="Sample Ph no."
        variant="outlined"
        fullWidth
        id="phoneNo"
        name="phoneNo"
        value={phoneNo}
        sx={{
          mb: 6,
        }}
        onChange={(e) => {
          console.log(isValidNumber(e.target.value));

          setPhoneNo(e.target.value);
        }}
      />

      <EnhancedTable />
    </Box>
  );
};

export default SamplePage;
