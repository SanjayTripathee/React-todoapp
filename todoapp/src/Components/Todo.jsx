import { useState } from "react";

export default function Todo() {
  const [name, setName] = useState("");
  return (
    <div>
      <form>
        <input type="text" value={name} />
      </form>
    </div>
  );
}
