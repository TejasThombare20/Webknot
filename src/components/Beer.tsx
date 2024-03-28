import Image from "next/image";
import React from "react";
import { toast } from "sonner";
import { useToast } from "./ui/use-toast";

const Beer = (item: any) => {
  //   console.log("item", item.item);
  const { toast } = useToast();
  //   const HandleClick = () => {};
  return (
    <div className="w-[250px] h-[100px] bg-slate-100 rounded-lg p-2 ">
      <div className="flex flex-col justify-center items-start gap-4">
        <h4
          className="font-semibold text-slate-900 cursor-pointer "
          onClick={() => {
            const textToCopy = item.item.name;
            navigator.clipboard.writeText(textToCopy);

            toast({
              title: "Copied the name",
            });
          }}
        >
          {item.item.name}
        </h4>
        {/* <div>{item.item.name}</div> */}
        <div className="text-slate-700 ">${item.item.price}</div>
      </div>
    </div>
  );
};

export default Beer;
