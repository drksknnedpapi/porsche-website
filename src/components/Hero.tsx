import React from "react";

import { Button } from "./ui/button";

export default function Hero() {
  return (
    <>
      <div className="h-screen w-screen absolute">
        <div className="absolute text-bottom flex flex-col left-20 bottom-20 text-black  align-bottom flex-end ">
          <div className=" flex flex-col mb-[20px] w-[597.667px]  text-8xl ">
            <h1 className="font-bold">Keep your essence.</h1>
          </div>
          <div
            className="w-[fit-content] h-[50px ] border-black-600"
          >
            <Button variant="link">Discover the 911</Button>
          </div>
        </div>
      </div>
    </>
  );
}
