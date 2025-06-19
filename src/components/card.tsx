import React from "react";
import { CardInter } from "@/utils/types/types";

export const Card = ({title,children}:CardInter) => {
  return (
    <div className="bg-secondary rounded-2xl drop-shadow-md p-8">
      <h1 className="text-2xl font-semibold">{title}</h1>
      {children}
    </div>
  )
} 
