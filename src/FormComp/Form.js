import React from "react";
import "./Form.css";
import SelectReason from "./SelectReason";
import CountryCity from "./CountryCity";
import useForm from "./useForm";
import validate from "../ValidateInfo";

function Form() {
  const { handleChange, inputs, handleSubmit, errors } = useForm(validate);

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form__row">
          <SelectReason />

          <input
            type="text"
            name="fullname"
            placeholder="Họ và tên *"
            value={inputs.fullname}
            onChange={handleChange}
            className={`${errors.fullname} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />

          <input
            type="text"
            name="jobtitle"
            placeholder="Công việc *"
            value={inputs.jobtitle}
            onChange={handleChange}
            className={`${errors.jobtitle} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />
          <input
            type="text"
            name="companyname"
            placeholder="Tên công ty *"
            value={inputs.companyname}
            onChange={handleChange}
            className={`${errors.companyname} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />
          <CountryCity />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={inputs.email}
            onChange={handleChange}
            className={`${errors.email} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />
          <input
            type="number"
            name="phone"
            placeholder="Số điện thoại *"
            value={inputs.phone}
            onChange={handleChange}
            className={`${errors.phone} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />

          <input
            type="textarea"
            name="address"
            placeholder="Địa chỉ *"
            value={inputs.address}
            onChange={handleChange}
            className=""
            autoComplete="off"
          />
          <input
            type="text"
            name="textarea"
            placeholder="Tình trạng sức khỏe hiện tại(tiền sử các bệnh về huyết áp, tim mạch,...) *"
            value={inputs.textarea}
            onChange={handleChange}
            className={`${errors.textarea} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />

    
          <button>Đăng kí</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
