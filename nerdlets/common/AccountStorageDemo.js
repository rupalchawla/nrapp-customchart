import React from "react";
import { AccountStorageQuery, AccountStorageMutation } from "nr1";

function AccountStorageDemo({ accountId, storage }) {
  const [value, setValue] = React.useState("");

  async function save() {
    await storage.setItem("value", value);
  }

  async function load() {
    const value = await storage.getItem("value");
    setValue(value);
  }

  return (
    <div>
      <h1>Account Storage Demo</h1>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button onClick={save}>Save</Button>
      <Button onClick={load}>Load</Button>
    </div>
  );
}
