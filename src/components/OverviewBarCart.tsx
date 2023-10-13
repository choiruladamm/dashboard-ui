"use client";

import { overviewCart } from "@/data/data";
import { FC } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface OverviewBarCartProps {}

const OverviewBarCart: FC<OverviewBarCartProps> = ({}) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={overviewCart}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" fill="#1e8efb" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default OverviewBarCart;
