import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { reducer } from "./slice";
import { RootState } from "../store";

export const Adder = (amount: number): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {return (dispatch) => {
    return dispatch(reducer.valueAdder(amount))
}}

export const ProductsUpdater = (products: any): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {return (dispatch) => {
    return dispatch(reducer.productsUpdate(products))
}}

export const employeesUpdater = (employees: any): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {return (dispatch) => {
    return dispatch(reducer.employeesListUpdate(employees))
}}

export const employeeSelector = (employee: any): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {return (dispatch) => {
    return dispatch(reducer.selectedEmployee(employee))
}}

export const salesUpdater = (sales: any): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {return (dispatch) => {
    return dispatch(reducer.salesListUpdate(sales))
}}

export const saleSelector = (sale: any): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {return (dispatch) => {
    return dispatch(reducer.selectedSale(sale))
}}