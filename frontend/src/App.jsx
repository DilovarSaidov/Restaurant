import { Route, Routes } from "react-router-dom";
import { CardProduct, Condition, Layout, Order, OrderTable, Stock } from "./routes/Routers";
import Home from "./pages/Home";
import { Suspense } from "react";
import { Loader } from "./components/Loader/Loader";
import Trash from "./pages/Trash";
import ColdFoods from "./components/category/foods/coldFood/ColdFoods";
import HotFoods from "./components/category/foods/hotFood/HotFoods";
import Soups from "./components/category/foods/soup/Soups";
import Dishs from "./components/category/foods/dish/Dishs";
import Drinks from "./components/category/foods/drink/Drinks";
import Fishs from "./components/category/foods/fish/Fishs";
import MeatFoods from "./components/category/foods/meatFood/MeatFoods";
import Grills from "./components/category/foods/grill/Grills";
import Menu from "./components/category/menu/Menu";



function App() {
  return (
    <div className="xs:overflow-x-hidden ">
      <div className="conteiner w-[100%] m-auto xs:w-[100%] xs:m-auto">

        <Routes>
          <Route path='/' element={
            <Suspense fallback={<Loader />}>
              <Layout />
            </Suspense>
          }>
            <Route index element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            } />
             <Route path="Menu" element={
              <Suspense fallback={<Loader />}>
                <Menu />
              </Suspense>
            } />
            <Route path="CardProduct/:id" element={
              <Suspense fallback={<Loader />}>
                <CardProduct />
              </Suspense>

            } />
            <Route path="orderTable" element={
              <Suspense fallback={<Loader />}>
                <OrderTable />
              </Suspense>

            } />
            <Route path="conditions" element={
              <Suspense fallback={<Loader />}>
                <Condition />
              </Suspense>
            } />
            <Route path="order" element={
              <Suspense fallback={<Loader />}>
                <Order />
              </Suspense>
            } />
            <Route path="Stock" element={
              <Suspense fallback={<Loader />}>
                <Stock />
              </Suspense>
            } />
            <Route path="Trash" element={
              <Suspense fallback={<Loader />}>
                <Trash />
              </Suspense>
            } />
            <Route path="coldFood" element={
              <Suspense fallback={<Loader />}>
                <ColdFoods />
              </Suspense>
            } />
            <Route path="hotFood" element={
              <Suspense fallback={<Loader />}>
                <HotFoods />
              </Suspense>
            } />
            <Route path="soup" element={
              <Suspense fallback={<Loader />}>
                <Soups />
              </Suspense>
            } />
            <Route path="dish" element={
              <Suspense fallback={<Loader />}>
                <Dishs />
              </Suspense>
            } />
            <Route path="drink" element={
              <Suspense fallback={<Loader />}>
                <Drinks />
              </Suspense>
            } />
            <Route path="fish" element={
              <Suspense fallback={<Loader />}>
                <Fishs />
              </Suspense>
            } />
            <Route path="meatFood" element={
              <Suspense fallback={<Loader />}>
                <MeatFoods />
              </Suspense>
            } />
            <Route path="grill" element={
              <Suspense fallback={<Loader />}>
                <Grills />
              </Suspense>
            } />
          </Route>


        </Routes>
      </div>

    </div>

  );
}

export default App;
