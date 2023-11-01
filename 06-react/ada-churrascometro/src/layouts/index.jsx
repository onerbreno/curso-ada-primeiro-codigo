import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <h3>Churrascômetro</h3>
      <Outlet />
    </>
  )
}