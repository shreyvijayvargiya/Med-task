import React, { useState } from 'react';
import {
  Typography,
  TextField,
  ButtonGroup,
  Button,
} from "@material-ui/core";
import { styled } from "@material-ui/styles";

const Home = () => {

    const [values, setValues] = useState({
      treatmentName: '',
      insuranceStatus: '',
      invoice: ''
    });

    const Input = styled("input")({
      display: "none",
    });
    
    
    return (
      <div className="mx-auto md:w-3/5 sm:w-3/5 xxs:w-full xl:w-2/5 2xl:w-2/5 p-4 my-4">
        <Typography
          variant="h3"
          className="text-center"
          style={{ color: "#202020" }}
        >
          Medical bill details
        </Typography>
        <br />
        <br />
        <div className="flex justify-center items-center gap-0">
          <div
            style={{
              backgroundColor: "#B03390",
              borderRadius: 100,
              width: "50px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            1
          </div>
          <div
            style={{ width: "80%", border: "3px solid #B03390", height: 0 }}
          />
          <div
            style={{
              border: "1px solid #B03390",
              color: "#B03390",
              borderRadius: 100,
              width: "50px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            2
          </div>
        </div>
        <br />
        <div className="flex justify-center items-center gap-0">
          <Typography variant="h6">Provider</Typography>
          <div style={{ width: "78%" }} />
          <Typography>Cost</Typography>
        </div>
        <br />
        <br />
        <div>
          <label style={{ color: "#202020" }}>
            Medical condition or treatment
            <span className="italic mx-2">(required)</span>
          </label>
          <br />
          <TextField
            name="treatmentName"
            variant="outlined"
            color="primary"
            fullWidth
            size="small"
          />
          <br />
          <br />
          <label style={{ color: "#202020" }}>
            Did you have insurance?
            <span className="italic mx-2">(required)</span>
          </label>
          <br />
          <ButtonGroup fullWidth>
            <Button
              color="black"
              variant="contained"
              style={{
                backgroundColor: "#202020",
                color: "white",
                textTransform: "none",
              }}
            >
              Yes
            </Button>
            <Button
              color="default"
              variant="outlined"
              style={{ textTransform: "none"  }}
            >
              No
            </Button>
          </ButtonGroup>
          <br />
          <br />
          <label style={{ color: "#202020" }}>
            Upload invoice
            <span className="italic mx-2">(optional)</span>
          </label>
          <div className="border border-dashed rounded-md p-4 hover:border hover:border-solid flex justify-center items-center">
            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
              />
              <Button
                variant="contained"
                component="span"
                className="mx-auto text-center"
                style={{
                  backgroundColor: "#595959",
                  color: "white",
                  textTransform: "none",
                }}
              >
                Add images
              </Button>
            </label>
          </div>
          <br />
          <br />
          <Button
            fullWidth
            variant="contained"
            style={{
              backgroundColor: "#B03390",
              color: "white",
              borderRadius: "40px",
              textTransform: "none",
            }}
          >
            Continue
          </Button>
        </div>
      </div>
    );
};
export default Home;
