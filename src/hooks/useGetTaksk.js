import { useEffect, useState } from "react";
import axios from 'axios';

const useGetTasks = (API) => {
	const [tasks, setTasks] = useState([]);

	useEffect(async () => {
		const response = await axios(API);
		setTasks(response.data);
	}, []);

	return tasks;
};

export default useGetTasks;