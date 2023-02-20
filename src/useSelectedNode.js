import React, { useState } from "react";

export default function useSelectedNode() {
  const [selected, setSelected] = useState("");

  return { selected, setSelected };
}
