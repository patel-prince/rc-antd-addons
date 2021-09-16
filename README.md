# rc-antd-addons

> Made with create-react-library, This package is to simplify usage of form elements available in antd.

[![NPM](https://img.shields.io/npm/v/rc-antd-addons.svg)](https://www.npmjs.com/package/rc-antd-addons) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save rc-antd-addons
```

## Usage

```tsx
import React from "react";
import { InputBox, FormBox } from "rc-antd-addons";

const App = () => {
	const handleSubmit = (data: any): void => {
		console.log(data);
	};

	return (
		<FormBox onFinish={handleSubmit}>
			<InputBox.Text label="Name" name="name" placeholder="Name" size="large" />

			<InputBox.Password
				label="Password"
				name="password"
				placeholder="Password"
				size="large"
			/>

			<InputBox.DatePicker label="DatePicker" name="date" size="large" />

			<InputBox.DateRangePicker
				label="Date Range Picker"
				name="date_range"
				size="large"
			/>

			<InputBox.Select
				label="Selectbox"
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
				label="Radio Button"
				name="radio"
				type="button"
				options={{
					list: [
						{ id: 1, name: "option 1" },
						{ id: 2, name: "option 2" },
					],
				}}
			/>

			<Button htmlType="submit" type="primary" size="large">
				Submit
			</Button>
		</FormBox>
	);
};

export default App;
```

## License

MIT © [patel-prince](https://github.com/patel-prince)
