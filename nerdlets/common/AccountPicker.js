import { AccountPicker } from 'nr1'
import { useState } from "react";

function AccountPickerDemo() {
  const [accountId, setAccountId] = useState(null);
  function onChangeAccount(_, value) {
    alert(`Selected account: ${value}`);
    setAccountId(value);
  }

  return (
    <AccountPicker
      label="Account"
      labelInline
      value={accountId}
      onChange={onChangeAccount}
    />
  );
}

export default AccountPickerDemo;
