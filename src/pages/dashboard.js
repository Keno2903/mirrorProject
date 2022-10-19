import React, { useState } from "react";
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
  const [layout, setLayout] = useState([
    { i: "a", x: 0, y: 0, w: 1, h: 1, isResizable: false },
    { i: "b", x: 1, y: 0, w: 1, h: 1, isResizable: false },
    { i: "c", x: 2, y: 0, w: 1, h: 1, isResizable: false },
    { i: "d", x: 0, y: 1, w: 1, h: 1, isResizable: false },
    { i: "e", x: 1, y: 1, w: 1, h: 1, isResizable: false },
    { i: "f", x: 2, y: 1, w: 1, h: 1, isResizable: false },
    { i: "g", x: 0, y: 2, w: 1, h: 1, isResizable: false },
    { i: "h", x: 1, y: 2, w: 1, h: 1, isResizable: false },
    { i: "i", x: 2, y: 2, w: 1, h: 1, isResizable: false },
  ]);

  return (
    <ResponsiveGridLayout
      layouts={{ lg: layout }}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 3, md: 3, sm: 3, xs: 2, xxs: 1 }}
      rowHeight={300}
      onLayoutChange={e=>setLayout(fixLayout(e))}
      width={1200}
      maxRows={3}
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

const fixLayout = (layout) => {
  // `y` is calculated by `h` in the layout object, since `h` is 20
  // first row will be 0, second 20, third 40
  const maxY = 2

  // when an item goes to a new row, there is an empty column in the maxY row
  // so here we find which columns exist
  // tslint:disable-next-line:max-line-length
  const maxRowXs = layout.map((item) => item.y === maxY ? item.x : null).filter((value) => value !== null)

  // xs or cols, we only have 3 cols
  const xs = [0,1,2]

  // find the missing col
  // tslint:disable-next-line:max-line-length
  const missingX = xs.find((value) => maxRowXs.every((maxRowX) => maxRowX !== value))

  // bring the item from the new row into maxY row
  // and place it in the missing column
  const fixedLayout = layout.map((item) => {
    if (item.y > maxY) {
      const fixedItem = {
        ...item,
        y: maxY,
        x: missingX
      }
      return fixedItem
    }
    return item
  })
  return fixedLayout
}