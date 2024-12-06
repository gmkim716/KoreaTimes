"use client";

import * as d3 from "d3";
import { useEffect, useRef } from "react";

export default function D3BarChart() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.x))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.y) || 0])
      .nice()
      .range([height - margin.bottom, margin.top]);

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    svg
      .append("g")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d) => x(d.x)!)
      .attr("y", (d) => y(d.y))
      .attr("height", (d) => y(0) - y(d.y))
      .attr("width", x.bandwidth())
      .attr("fill", "steelblue");

    // Cleanup
    return () => {
      d3.select(chartRef.current).selectAll("*").remove();
    };
  }, []);

  return <div ref={chartRef} />;
}

// 샘플 데이터
const data = [
  { x: "A", y: 30 },
  { x: "B", y: 80 },
  { x: "C", y: 45 },
  { x: "D", y: 60 },
  { x: "E", y: 20 },
  { x: "F", y: 90 },
  { x: "G", y: 55 },
];

const width = 800;
const height = 400;
const margin = { top: 20, right: 30, bottom: 30, left: 40 };
