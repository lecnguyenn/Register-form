import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import Form from "./Form";

function SelectReason() {
  const options = [
    { label: "Từ 12 đến 18 tuổi", value: "Từ 12 đến 18 tuổi" },
    {
      label: "từ 18 đến 65 tuổi",
      value: "từ 18 đến 65 tuổi"
    },

    {
      label: "Lớn hơn 65 tuổi",
      value: "Lớn hơn 65 tuổi"
    },
  ];

  const [selected, setSelected] = useState([]);
  const [disabled, setdisabled] = useState(false);
  return (
    <div className="form__row">
      <span>Vui lòng nhập độ tuổi của bạn</span>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={"Vui lòng nhập độ tuổi của bạn"}
        className={"selectAll"}
      />
    </div>
  );
}

export default SelectReason;
