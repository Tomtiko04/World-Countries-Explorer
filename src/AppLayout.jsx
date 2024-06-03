import { Outlet } from "react-router-dom";
import Header from "./Ui/Header";



export default function AppLayout() {
  return (
    <div>
       <Header />
        <Outlet />
    </div>
  )
}
