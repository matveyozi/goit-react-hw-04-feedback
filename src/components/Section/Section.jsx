import React from 'react';
import PropTypes from 'prop-types';
import { SectionWrapper, SectionTitle } from './Section.styled';
const Section = props => {
	return (
		<SectionWrapper>
			<SectionTitle>{props.title}</SectionTitle>
			{props.children}
		</SectionWrapper>
	);
};

Section.propType = {
	title: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired,
};
export default Section;