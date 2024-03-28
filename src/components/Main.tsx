  "use client";
  import React, { useEffect, useState } from "react";
  import Beer from "./Beer";

  const Main = () => {
    const [data, setdata] = useState<any>();

    const fetchData = async () => {
      const response = await fetch("https://api.sampleapis.com/beers/ale");
      let json = await response.json();
      json.forEach((obj: any) => {
        obj.price = parseFloat(obj.price.replace("$", ""));
      });

      console.log("json", json[0].price);
      json.sort((a: any, b: any) => a.price - b.price);

      json = json.filter((obj: any) => obj.name.startsWith("F"));

      setdata(json);
    };

    useEffect(() => {
      fetchData();
    }, []);

    return (
      <div className=" ">
        <section className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {data?.map((item: any) => (
            <Beer item={item} />
          ))}
        </section>
      </div>
    );
  };

  export default Main;
