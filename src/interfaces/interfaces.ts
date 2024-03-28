import { Timestamp } from "firebase/firestore";

export interface Sale {
   
    product: Product,
    client: Client,
    date: string,
    delivery: {
        company: string,
        cost: number,
        date: string
    },
    isDelivered: boolean    
}

export interface Product {
    model: string,
    lateral: boolean,
    height: number,
    length: number,
    fabric: string,
    colour: string
}

export interface Client {
 name: string,
 lastName: string,
 address: string,
 location: string,
 postalcode: number,
 province: string,
 phone: string,
}


export const provinciasArgentinas = [
  { title: "Ciudad Autónoma de Buenos Aires" },
  { title: "Buenos Aires" },
  { title: "Córdoba" },
  { title: "Santa Fe" },
  { title: "Tucumán" },
  { title: "Mendoza" },
  { title: "Entre Ríos" },
  { title: "Salta" },
  { title: "Chaco" },
  { title: "Corrientes" },
  { title: "Misiones" },
  { title: "Santiago del Estero" },
  { title: "San Juan" },
  { title: "Jujuy" },
  { title: "Río Negro" },
  { title: "Neuquén" },
  { title: "Formosa" },
  { title: "San Luis" },
  { title: "Catamarca" },
  { title: "La Rioja" },
  { title: "La Pampa" },
  { title: "Santa Cruz" },
  { title: "Tierra del Fuego" },
 
];

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Asegura dos dígitos en el mes
const day = String(currentDate.getDate()).padStart(2, "0"); // Asegura dos dígitos en el día
const formattedDate = `${year}-${month}-${day}`;

//Date to deliver
const currentDeliveryDate = new Date()
currentDeliveryDate.setDate(currentDate.getDate() + 7);
const currentDay = String(currentDeliveryDate.getDate()).padStart(2, "0");
const currentMonth = String(currentDeliveryDate.getMonth() + 1).padStart(2, "0");
const currentYear = currentDeliveryDate.getFullYear();
const formattedDeliveryDate = `${currentYear}-${currentMonth}-${currentDay}`

export const blankClient: Client = {
    name: "",
    lastName: "",
    address: "",
    location: "",
    postalcode: 0,
    province: "",
    phone: "",
  };
  
 export const blankProduct: Product = {
    model: "",
    lateral: false,
    height: 0,
    length: 0,
    fabric: "",
    colour: "",
  };
  
 export const blankSaleState = {
    product: blankProduct,
    client: blankClient,
    date: formattedDate,
    delivery: {
      company: "padma",
      cost: 0,
      date: formattedDeliveryDate,
    },
    isDelivered: false,
  };

