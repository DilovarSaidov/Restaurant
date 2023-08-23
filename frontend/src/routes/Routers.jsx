import { lazy } from "react";


export const Layout =lazy(()=> import("../components/Layout/Layout"))
export const Home =lazy(()=> import("../pages/Home"))
export const Menu =lazy(()=> import("../components/category/menu/Menu"))
export const CardProduct =lazy(()=> import("../components/category/CardProduct"))
export const OrderTable =lazy(()=> import("../components/category/dishesOrder/OrderTable"))
export const Condition =lazy(()=> import("../components/category/order/Condition"))
export const Order =lazy(()=> import("../components/category/order/Order"))
export const Stock =lazy(()=> import("../components/category/stock/Stock"))
export const Trash =lazy(()=> import("../pages/Trash"))