import React from "react";
import { FormItemProps } from "antd";
import TextInputBox from "./TextInputBox";
import PasswordInputBox from "./PasswordInputBox";
import SelectInputBox from "./SelectInputBox";
import { InputBoxProps } from "./interface";
import DatePickerInputBox from "./DatePickerInputBox";
import DateRangePickerInputBox from "./DateRangePickerInputBox";
import RadioInputBox from "./RadioInputBox";

const InternalInputBox: React.FC<InputBoxProps> = (props) => {
	return <TextInputBox {...props} />;
};

interface CompoundedComponent
	extends React.ForwardRefExoticComponent<FormItemProps> {
	Text: typeof TextInputBox;
	Password: typeof PasswordInputBox;
	Select: typeof SelectInputBox;
	DatePicker: typeof DatePickerInputBox;
	DateRangePicker: typeof DateRangePickerInputBox;
	Radio: typeof RadioInputBox;
}

const InputBox = InternalInputBox as CompoundedComponent;
InputBox.Text = TextInputBox;
InputBox.Password = PasswordInputBox;
InputBox.Select = SelectInputBox;
InputBox.DatePicker = DatePickerInputBox;
InputBox.DateRangePicker = DateRangePickerInputBox;
InputBox.Radio = RadioInputBox;

export default InputBox;
