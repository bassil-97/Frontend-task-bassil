import React, { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

export default function PhoneInput() {
  const [phone, setPhone] = useState("");

  let endAdornment = (
    <InputAdornment>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CheckCircleOutlineOutlinedIcon
          size="small"
          sx={{
            width: "20px",
            height: "20px",
            color: "green",
            marginRight: "6px",
          }}
        />
        <Typography sx={{ fontWeight: "bold" }}>verified</Typography>
      </Box>
    </InputAdornment>
  );

  return (
    <FormControl
      sx={{
        width: "100%",
      }}
      variant="outlined"
    >
      <OutlinedInput
        type="tel"
        id="outlined-adornment-weight"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        startAdornment={<InputAdornment>CR number</InputAdornment>}
        endAdornment={phone ? endAdornment : null}
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
          "aria-label": "phone",
          inputMode: "numeric",
          pattern: "[0-9]*",
          style: {
            textAlign: "center",
          },
        }}
        color="success"
        fullWidth
      />
      <FormHelperText id="outlined-weight-helper-text">
        <Typography
          sx={{ textAlign: "right", marginTop: "15px", fontSize: "1.2em" }}
        >
          Do you have international CR ?{" "}
          <Link href="#" underline="none" sx={{ color: "orange" }}>
            Edit
          </Link>
        </Typography>
      </FormHelperText>
    </FormControl>
  );
}
