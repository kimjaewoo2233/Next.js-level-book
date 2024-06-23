import { CouterWithReducer } from "@/components/counter-with-reducer";
import { GlobalNav } from "@/components/nav/global-nav";
import Inputform from "@/components/ref/text-input-button";
import { ScrollTracker } from "@/components/scroll-tracker";
import UserDetail from "@/components/use-details";
import { DefaultFunction, ImportantButton, ReferenceButton } from "@/components/various-buttons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      {/* <UserDetail/>
      <div className="flex flex-col p-4 space-y-2">
        <DefaultFunction/>
        <ImportantButton/>
        <ReferenceButton/>
      </div>

      <CouterWithReducer/>
      <Inputform/>

      <ScrollTracker/> */}
    </main>
  );
}
