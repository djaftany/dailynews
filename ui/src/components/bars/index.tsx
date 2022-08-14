import { Container } from "./styles";
import { useEffect, useState } from "react";

export function Navbar () {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		setTimeout(() => setDate(new Date()), 1000)
	})


	return (
		<Container>
			<div>
				{date.getDate()}
				/
				{String(date.getMonth() + 1).padStart(2, "0")}
				/
				{date.getFullYear()}
			</div>
			<div className={"container"}>
				{date.getHours().toString().padStart(2, "0")}
				:
				{date.getMinutes().toString().padStart(2, "0")}
				:
				{date.getSeconds().toString().padStart(2, "0")}
			</div>
		</Container>
	)
}