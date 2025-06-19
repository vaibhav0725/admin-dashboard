import React from "react";
import { Card } from "@/components/card";
import { ReportCardSection } from "@/components/report-card-section";
import { reportVals } from "@/utils/constants/reports";
import { DropDownCards } from "@/components/drop-down-card";
export default function Reports() {
  return (
    <div className="bg-primary px-5 py-9 min-h-screen flex flex-col gap-5">
      <div className="grid grid-cols-3 gap-5">
        {
          reportVals.map((r,idx)=>(
            <Card key={idx} title={r.title}>
              <ReportCardSection text={r.text} btnText={r.btnText}/>
            </Card>
          ))
        }
      </div>
      <DropDownCards title="Scheduled Reports">
        {
          reportVals.map((r,idx)=>(
            <li key={idx} className="text-lg">
              {r.title}
            </li>
          ))
        }
      </DropDownCards>
    </div>
  )
}
