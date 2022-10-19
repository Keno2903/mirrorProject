import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import axios from "axios";
const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Dashboard() {


const getBackend = () => {
    axios.get("http://localhost:8080/", { crossdomian: true})
    .then((response) => {
        console.log(response);
    })
}
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 1, isResizable: false },
    { i: "b", x: 1, y: 0, w: 1, h: 1, isResizable: false },
    { i: "c", x: 2, y: 0, w: 1, h: 1, isResizable: false },
    { i: "d", x: 0, y: 1, w: 1, h: 1, isResizable: false },
    { i: "e", x: 1, y: 1, w: 1, h: 1, isResizable: false },
    { i: "f", x: 2, y: 1, w: 1, h: 1, isResizable: false },
    { i: "g", x: 0, y: 2, w: 1, h: 1, isResizable: false },
    { i: "h", x: 1, y: 2, w: 1, h: 1, isResizable: false },
    { i: "i", x: 2, y: 2, w: 1, h: 1, isResizable: false },
  ];

  return (
    <ResponsiveGridLayout
      layouts={{ lg: layout }}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 3, md: 3, sm: 3, xs: 2, xxs: 1 }}
      rowHeight={300}
      onLayoutChange={getBackend}
      width={1200}
    >
      <div key="a" style={{ background: "grey" }}>
        a
      </div>
      <div key="b" style={{ background: "grey" }}>
        b
      </div>
      <div key="c" style={{ background: "grey" }}>
        c
      </div>
      <div key="d" style={{ background: "grey" }}>
        d
      </div>
      <div key="e" style={{ background: "grey" }}>
        e
      </div>
      <div key="f" style={{ background: "grey" }}>
        f
      </div>
      <div key="g" style={{ background: "grey" }}>
        g
      </div>
      <div key="h" style={{ background: "grey" }}>
        h
      </div>
      <div key="i" style={{ background: "grey" }}>
        i
      </div>
    </ResponsiveGridLayout>
  );
}
