import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

import CircleChecked from "@mui/icons-material/CheckCircleOutline";
import CircleUnchecked from "@mui/icons-material/RadioButtonUnchecked";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";

import Sidebar from "../Sidebar/Sidebar";
import PhoneInput from "../FormElements/PhoneInput";
import Input from "../FormElements/Input";

import vendors from "../assets/VendorTypes";

export default function Home() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Container
        className="home-section"
        component="main"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "3rem 0",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h5"
            gutterBottom
            className="title"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <LooksTwoIcon sx={{ color: "#E67E22" }} /> General info
          </Typography>
          <PhoneInput />
        </Box>

        <Box sx={{ width: "100%", marginTop: "50px" }}>
          <Typography variant="h5" gutterBottom className="title">
            General company information
          </Typography>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Input
                  id={"company-name-en"}
                  label={"Company Name (English)"}
                  type={"text"}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input
                  id={"company-name-ar"}
                  label={"Company Name (Arabic)"}
                  type={"text"}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <Input id={"Address"} label={"Address"} type={"text"} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Input
                  id={"PO-Box-Address"}
                  label={"PO Box Address"}
                  type={"text"}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box sx={{ width: "100%", marginTop: "50px" }}>
          <Typography variant="h5" gutterBottom className="title">
            Communication
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <Input
                id={"mobile-number"}
                label={"Mobile Number"}
                type={"text"}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <Input id={"phone-number"} label={"Phone Number"} type={"text"} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Input id={"email"} label={"Email address"} type={"email"} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Input
                id={"website"}
                label={"Website ( Optional )"}
                type={"text"}
              />
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ width: "100%", marginTop: "50px" }}>
          <Typography variant="h5" gutterBottom className="title">
            Vendor Type
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexWrap: "wrap",
            }}
          >
            {vendors.map((vendor) => (
              <Grid item xs={12} sm={4} md={4} key={vendor.id}>
                <Paper
                  elevation={1}
                  sx={{
                    padding: "2rem 0",
                    outline: "1px solid lightgray",
                    position: "relative",
                    paddingLeft: "10px",
                  }}
                >
                  <Checkbox
                    icon={<CircleUnchecked />}
                    checkedIcon={<CircleChecked />}
                    sx={{ position: "absolute", top: "0", right: "0" }}
                  />
                  <Typography className="vendor-title">
                    {vendor.title}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "60px",
          }}
        >
          <Button variant="text" size="small">
            Go back
          </Button>
          <Button variant="contained" size="large" className="next-btn">
            NEXT
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
