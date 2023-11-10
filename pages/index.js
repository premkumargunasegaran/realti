import Image from "next/image";
import { Inter } from "next/font/google";
import UserHome from "../pages/user/index"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
     <UserHome />
    </>
  );
}
