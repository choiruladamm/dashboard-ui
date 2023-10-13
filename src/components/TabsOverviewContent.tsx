import { FC } from "react";
import { TabsContent } from "./ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import OverviewBarCart from "./OverviewBarCart";
import { overviewCard } from "@/data/data";
import OverviewRecentSales from "./OverviewRecentSales";

interface TabsOverviewContentProps {
  value: string;
}

const TabsOverviewContent: FC<TabsOverviewContentProps> = ({ value }) => {
  return (
    <TabsContent value={value} className="space-y-4">
      {/* top */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {overviewCard.map((data, idx) => (
          <Card key={idx}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                {data.title}
              </CardTitle>
              {data.icons}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.mainValue}</div>
              <p className="text-xs text-muted-foreground">{data.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* bottom */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <OverviewBarCart />
          </CardContent>
        </Card>
        <Card className="col-span-4 lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>you made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <OverviewRecentSales />
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  );
};

export default TabsOverviewContent;
