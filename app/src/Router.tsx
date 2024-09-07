import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateCustomers } from "./pages/CreateCustomer";
import { ListCustomers } from "./pages/ListCustomers";
import { EditCustomers } from "./pages/EditCustomers";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListCustomers />} />
        <Route path="/customer/create" element={<CreateCustomers />} />
        <Route path="/customer/edit/:customerId" element={<EditCustomers />} />
      </Routes>
    </BrowserRouter>
  );
};
