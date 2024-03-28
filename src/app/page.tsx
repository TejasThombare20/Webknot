import Header from "@/components/Header";
import Main from "@/components/Main";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex flex-col gap-4  mx-auto overflow-hidden  ">
      <Header />
      <Main />
    </main>
  );
}
