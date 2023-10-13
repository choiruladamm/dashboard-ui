import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { overviewSales } from "@/data/data";

interface OverviewRecentSalesProps {}

const OverviewRecentSales: FC<OverviewRecentSalesProps> = ({}) => {
  return (
    <div className="space-y-8">
      {overviewSales.map((sales, idx) => (
        <div key={idx} className="flex items-center">
          <Avatar>
            <AvatarImage src={sales.avatarImg} />
            <AvatarFallback>{sales.avatarFb}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{sales.name}</p>
            <p className="text-sm text-muted-foreground">
              {sales.email}
            </p>
          </div>
          <div className="ml-auto font-medium">{sales.sale}</div>
        </div>
      ))}
    </div>
  );
};

export default OverviewRecentSales;
