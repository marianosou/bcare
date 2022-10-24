import React from "react";
import { queryList } from "../contants/queryList.constants";
import QueryComponent from "../components/QueryComponent";

const Queries = () => {
	return (
		<div className="queries-container">
			{queryList.map(({ id, query_name, endpoint }) => (
				<QueryComponent key={id} queryText={query_name} endpoint={endpoint} />
			))}
		</div>
	);
};

export default Queries;
