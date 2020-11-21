import React from 'react';
import { Paper } from '../../components/styled/Paper';
import { Table, TBody, TD, THead, TR } from '../../components/styled/Table';
import { InfixPostfix } from './calculator';

function InfixPostfixTable({ record }: { record: InfixPostfix[] }) {
	return (
		<Paper>
			<Table>
				<THead>
					<TR>
						<TD center>Symbol</TD>
						<TD center>Stack</TD>
						<TD center>P</TD>
					</TR>
				</THead>
				<TBody>
					{record.map(({ symbol, operator, p }, i) => (
						<TR key={i}>
							<TD>{symbol}</TD>
							<TD>{operator.join('')}</TD>
							<TD>{p.join('')}</TD>
						</TR>
					))}
				</TBody>
			</Table>
		</Paper>
	);
}

export default InfixPostfixTable;
