import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooksRedux";
import { salesUpdater } from "../../../redux/reducer/actions";
import { Link, useNavigate } from "react-router-dom";
import { Sale, Product, Client } from "../../../interfaces/interfaces";
import { setSale } from "../../../middlewares/sales/edit";
import { current } from "@reduxjs/toolkit";

import {
  blankClient,
  blankSaleState,
  blankProduct,
} from "../../../interfaces/interfaces";
import {
  Box,
  InputAdornment,
  TextField,
  Button,
  FilledInput,
  FormHelperText,
  FormControl,
  Switch,
  FormControlLabel,
} from "@mui/material/";

interface Props {
  refresh: any;
}

const UpdateSale = ({ refresh }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentSale = useAppSelector(
    (state) => state.global.sales.selectedSale
  );
  const id = currentSale.id;

  const [clientData, setClientData] = useState<Client>(currentSale.client);
  const [deliveryData, setDeliveryData] = useState({
    company: currentSale.delivery.company,
      cost: currentSale.delivery.cost,
      date: currentSale.delivery.date,
  });
  const [productData, setProductData] = useState<Product>(currentSale.product);
  const [saleData, setSaleData] = useState<Sale>(currentSale);

  const handleSaleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if(name === "isDelivered"){
      setSaleData({
        ...saleData,
        [name]: !saleData.isDelivered,
      });
    } else {
      setSaleData({
        ...saleData,
        [name]: value,
      });
    }
   
  };

  const handleProductChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "lateral") {
      setProductData({
        ...productData,
        lateral: !productData.lateral,
      });
    } else {
      setProductData({
        ...productData,
        [name]: value,
      });
    }
    console.log(saleData.product);
  };

  const handleClientChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setClientData({
      ...clientData,
      [name]: value,
    });
   
  };
  const handleDeliveryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDeliveryData({
      ...deliveryData,
      [name]: value,
    });

  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(productData)
    setSale(id, saleData);
    setSaleData(blankSaleState);
    setProductData(blankProduct);
    setClientData(blankClient);
    refresh();
    navigate("/sales");
  };

  React.useEffect(() => {
    setSaleData({
      ...saleData,
      client: clientData,
      product: productData,
      delivery: deliveryData
    });
  }, [productData, clientData, deliveryData]);

  return (
    <form onSubmit={handleSubmit}>
    <Box sx={{ px: "15%", py: "5%" }} id="clientInfo">
      <Box sx={{ display: "flex", flexDirection: "column",  borderRadius: 3, p:2, backgroundColor:"whitesmoke"  }}>
        Client Info
        <Box>
          <TextField
            label="Name"
            type="text"
            name="name"
            value={clientData.name}
            onChange={handleClientChange}
            variant="standard"
            sx={{ my: 2, mx: 1, width: "45%" }}
            required
          />

          <TextField
            label="Last Name"
            type="text"
            name="lastName"
            value={clientData.lastName}
            onChange={handleClientChange}
            variant="standard"
            sx={{ my: 2, mx: 1, width: "45%" }}
            required
          />
        </Box>
        <Box>
          <TextField
            label="Location"
            type="text"
            name="location"
            value={clientData.location}
            onChange={handleClientChange}
            variant="standard"
            sx={{ my: 2, mx: 1, width: "45%" }}
            required
          />
          <TextField
            label="Address"
            type="text"
            name="address"
            value={clientData.address}
            onChange={handleClientChange}
            variant="standard"
            sx={{ my: 2, mx: 1, width: "45%" }}
            required
          />

          <Box>
            <TextField
              label="Postal Code"
              type="number"
              name="postalcode"
              value={clientData.postalcode}
              onChange={handleClientChange}
              variant="standard"
              sx={{ my: 2, mx: 0.5, width: "30%" }}
              required
            />
            <TextField
              label="Province"
              type="text"
              name="province"
              value={clientData.province}
              onChange={handleClientChange}
              variant="standard"
              sx={{ my: 2, mx: 0.5, width: "30%" }}
              required
            />
            <TextField
              label="Phone Number"
              type="text"
              name="phone"
              value={clientData.phone}
              onChange={handleClientChange}
              variant="standard"
              sx={{ my: 2, mx: 0.5, width: "30%" }}
              required
            />
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "column" }}
          id="productInfo"
        >
          Product Info
          <Box>
            <TextField
              label="Model"
              type="text"
              name="model"
              value={productData.model}
              onChange={handleProductChange}
              variant="filled"
              size="small"
              sx={{ my: 2, mx: 0.5, width: "30%" }}
              required
            />{" "}
            <TextField
              label="Tela"
              type="text"
              name="fabric"
              value={productData.fabric}
              onChange={handleProductChange}
              variant="filled"
              size="small"
              sx={{ my: 2, mx: 0.5, width: "30%" }}
              required
            />
            <TextField
              label="Colour"
              type="text"
              name="colour"
              value={productData.colour}
              onChange={handleProductChange}
              variant="filled"
              size="small"
              sx={{ my: 2, mx: 0.5, width: "30%" }}
              required
            />
          </Box>
          <Box>
            <FormControl>
              <FilledInput
                type="number"
                name="height"
                value={productData.height}
                onChange={handleProductChange}
                size="small"
                sx={{ mx: 0.5 }}
                endAdornment={
                  <InputAdornment position="end">cm</InputAdornment>
                }
                required
              />{" "}
              <FormHelperText>Height</FormHelperText>{" "}
            </FormControl>
            <FormControl>
              <FilledInput
                type="number"
                name="length"
                value={productData.length}
                onChange={handleProductChange}
                size="small"
                sx={{ mx: 0.5 }}
                endAdornment={
                  <InputAdornment position="end">cm</InputAdornment>
                }
                required
              />{" "}
              <FormHelperText>Length</FormHelperText>{" "}
            </FormControl>
            <FormControlLabel
              sx={{ mx: 1 }}
              control={
                <Switch
                  name="lateral"
                  checked={productData.lateral}
                  onChange={handleProductChange}
                />
              }
              label="Lateral"
            />
            <FormControlLabel
                sx={{ mx: 1 }}
                control={
                  <Switch
                    name="isDelivered"
                    checked={saleData.isDelivered}
                    onChange={handleSaleChange}
                    color="success"
                  />
                }
                label="Delivered"
              />
          </Box>
          Delivery Info
          <Box>
            <TextField
              label="Company"
              type="text"
              name="company"
              value={deliveryData.company}
              onChange={handleDeliveryChange}
              variant="filled"
              size="small"
              sx={{ my: 2, mx: 0.5, width: "30%" }}
              required
            />

            <TextField
              label="Price"
              type="number"
              name="cost"
              value={deliveryData.cost}
              onChange={handleDeliveryChange}
              variant="filled"
              size="small"
              sx={{ my: 2, mx: 0.5, width: "30%" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              required
            />
            <TextField
              label="Date to Deliver"
              type="date"
              name="date"
              value={deliveryData.date}
              onChange={handleDeliveryChange}
              variant="filled"
              size="small"
              sx={{ my: 2, mx: 0.5, width: "30%" }}
              required
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button type="submit" variant="contained" color="success">
              Update Sale
            </Button>
            <Link to={"/sales"}>
              <Button variant="outlined" color="warning">Go Back To List</Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  </form>
  );
};

export default UpdateSale;
