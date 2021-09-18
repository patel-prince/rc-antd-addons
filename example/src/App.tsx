import React from "react";

import { Button, Card } from "antd";
import { FormBox, InputBox } from "antd-addons";
import "antd/dist/antd.css";

const App = () => {
	const handleSubmit = (data: any): void => {
		console.group(data);
	};
	return (
		<div className="page-wrapper">
			<Card className="form-wrapper">
				<FormBox onFinish={handleSubmit}>
					<InputBox.Text name="name" placeholder="Name" size="large" />
					<InputBox.Password
						name="password"
						placeholder="Password"
						size="large"
					/>
					<InputBox.DatePicker name="date" size="large" />
					<InputBox.DateRangePicker name="date_range" size="large" />
					<InputBox.Select
						name="select"
						placeholder="Select Option"
						options={{
							list: [
								{ id: 1, name: "option 1" },
								{ id: 2, name: "option 2" },
							],
						}}
					/>
					<InputBox.Radio
						name="radio"
						type="button"
						options={{
							list: [
								{ id: 1, name: "option 1" },
								{ id: 2, name: "option 2" },
							],
						}}
					/>
					<InputBox.Number
						name="number_field"
						label="Number Field"
						placeholder="Number"
					/>
					<Button htmlType="submit" type="primary" size="large">
						Submit
					</Button>
				</FormBox>
			</Card>
		</div>
	);
};

export default App;
