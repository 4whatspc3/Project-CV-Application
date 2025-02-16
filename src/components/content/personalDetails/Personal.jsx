import { useState } from "react";
import {
  NameInput,
  EmailInput,
  PhoneInput,
  AddressInput,
} from "./PersonalInputs";
import { NameInfo, EmailInfo, PhoneInfo, AddressInfo } from "./PersonalInfo";

function Personal() {
  const [formData, setFormData] = useState({
    textName: "",
    textEmail: "",
    textPhone: "",
    textAddress: "",
  });

  function handleChange(property, value) {
    setFormData((prev) => ({
      ...prev,
      [property]: value,
    }));
  }

  return (
    <>
      <h2>Personal Details</h2>
      <form className="personal-details">
        <NameInput
          value={formData.textName}
          handleChange={(e) => handleChange("textName", e.target.value)}
        />
        <EmailInput
          value={formData.textEmail}
          handleChange={(e) => handleChange("textEmail", e.target.value)}
        />
        <PhoneInput
          value={formData.textPhone}
          handleChange={(e) => handleChange("textPhone", e.target.value)}
        />
        <AddressInput
          value={formData.textAddress}
          handleChange={(e) => handleChange("textAddress", e.target.value)}
        />
      </form>

      <div className="personal-info">
        <NameInfo value={formData.textName} />
        <EmailInfo value={formData.textEmail} />
        <PhoneInfo value={formData.textPhone} />
        <AddressInfo value={formData.textAddress} />
      </div>
    </>
  );
}

export default Personal;
