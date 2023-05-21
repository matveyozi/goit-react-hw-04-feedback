import React from 'react';
import PropTypes from 'prop-types';

import { StatisticData, RateData, Cell, TotalData } from './Statistics.styled';

export const Statistics = ({
	good,
	neutral,
	bad,
	total,
	positivePercentage,
}) => {
	return (
		<StatisticData>
			<RateData>
				<Cell>
					<p>Good</p>
					<span>{good}</span>
				</Cell>
				<Cell>
					<p>Neutral</p>
					<span>{neutral}</span>
				</Cell>
				<Cell>
					<p>bad</p>
					<span>{bad}</span>
				</Cell>
			</RateData>

			<TotalData>
				<Cell>
					<p>Total</p>
					<span>{total}</span>
				</Cell>
				<Cell>
					<p>positive feedback</p>
					<span>{positivePercentage}%</span>
				</Cell>
			</TotalData>
		</StatisticData>
	);
};

Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positivePercentage: PropTypes.number.isRequired,
};