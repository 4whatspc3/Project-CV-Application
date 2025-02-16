import { useState } from "react";
import {
  NameInput,
  EmailInput,
  PhoneInput,
  AddressInput,
} from "./PersonalInputs";
import PersonalInfo from "./PersonalInfo";

function Personal({ personalData, handleChangePersonal }) {
  return (
    <>
      <h2>Personal Details</h2>
      <form className="personal-details">
        <NameInput
          value={personalData.textName}
          handleChange={(e) => handleChangePersonal("textName", e.target.value)}
        />
        <EmailInput
          value={personalData.textEmail}
          handleChange={(e) =>
            handleChangePersonal("textEmail", e.target.value)
          }
        />
        <PhoneInput
          value={personalData.textPhone}
          handleChange={(e) =>
            handleChangePersonal("textPhone", e.target.value)
          }
        />
        <AddressInput
          value={personalData.textAddress}
          handleChange={(e) =>
            handleChangePersonal("textAddress", e.target.value)
          }
        />
      </form>
    </>
  );
}

export default Personal;
