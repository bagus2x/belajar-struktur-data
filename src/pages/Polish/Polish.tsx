import React, { useState } from 'react';
import { Menu } from '../../components/Menu/Menu';
import { ItemMenu } from '../../components/Menu/Menu.styled';
import { Input } from '../../components/styled/Input';
import { H1, H2, H5 } from '../../components/styled/Text';
import { InfixPostfix, PolishCalculator } from './calculator';
import InfixPostfixTable from './InfixPostfixTable';
import { BtnSwitch, ButtonHome, Container, ContentWrapper, CoverterButton, InputWrapper, ResultBox, SelectWrapper } from './Polish.styled';
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as SwitchIcon } from '../../assets/icons/switch.svg';

const getPattern = (pattern: string): string => {
	switch (pattern) {
		case 'Prefix':
			return '*AB';
		case 'Postfix':
			return 'AB*';
		default:
			return 'A*B';
	}
};

function Polish() {
	const [originValue, setOriginValue] = useState('');
	const [expectedValue, setExpectedValue] = useState('');
	const [originType, setOriginType] = useState('Infix');
	const [expectedType, setExpectedType] = useState('Postfix');
	const [postfixTable, setPostfixTable] = useState<InfixPostfix[]>([]);

	const handleOriginType = (type: string) => {
		setOriginType(type);
	};

	const handleExpectedType = (type: string) => {
		setExpectedType(type);
	};

	const handleOriginvalue = (e: React.FocusEvent<HTMLInputElement>) => {
		setOriginValue(e.currentTarget.value);
	};

	const handleSwitch = () => {
		const temp = originType;
		setOriginType(expectedType);
		setExpectedType(temp);
		setExpectedValue('');
		setPostfixTable([]);
	};

	const handleCalculation = () => {
		if (!originValue) return;
		if (originType === 'Infix' && expectedType === 'Postfix') {
			setExpectedValue(
				PolishCalculator.infixToPosfix(originValue, (record: InfixPostfix[]) => {
					setPostfixTable(record);
				}).join('')
			);
		} else if (originType === 'Infix' && expectedType === 'Prefix') {
			setExpectedValue(PolishCalculator.infixToPrefix(originValue).join(''));
		} else if (originType === 'Infix' && expectedType === 'Infix') {
			setExpectedValue(originValue);
		} else if (originType === 'Prefix' && expectedType === 'Infix') {
			setExpectedValue(PolishCalculator.prefixToInfix(originValue));
		} else if (originType === 'Prefix' && expectedType === 'Postfix') {
			setExpectedValue(PolishCalculator.prefixToPostfix(originValue).join(''));
		} else if (originType === 'Prefix' && expectedType === 'Prefix') {
			setExpectedValue(originValue);
		} else if (originType === 'Postfix' && expectedType === 'Infix') {
			setExpectedValue(PolishCalculator.postfixToInfix(originValue));
		} else if (originType === 'Postfix' && expectedType === 'Prefix') {
			setExpectedValue(PolishCalculator.postfixToPrefix(originValue).join(''));
		} else if (originType === 'Postfix' && expectedType === 'Postfix') {
			setExpectedValue(originValue);
		}
	};

	return (
		<Container>
			<ContentWrapper>
				<H1>Notasi Polish</H1>
				<SelectWrapper>
					<Menu onChange={handleOriginType} title={originType} fullWidth>
						<ItemMenu>Infix</ItemMenu>
						<ItemMenu>Prefix</ItemMenu>
						<ItemMenu>Postfix</ItemMenu>
					</Menu>
					<BtnSwitch onClick={handleSwitch}>
						<SwitchIcon />
					</BtnSwitch>
					<Menu onChange={handleExpectedType} title={expectedType} fullWidth>
						<ItemMenu>Infix</ItemMenu>
						<ItemMenu>Prefix</ItemMenu>
						<ItemMenu>Postfix</ItemMenu>
					</Menu>
				</SelectWrapper>
				<InputWrapper>
					<Input fullWidth onBlur={handleOriginvalue} placeholder={'contoh: ' + getPattern(originType)} />
					<CoverterButton onClick={handleCalculation} size="sm">
						Run
					</CoverterButton>
					<ResultBox>{expectedValue || getPattern(expectedType)}</ResultBox>
				</InputWrapper>
				<H2>Tabel Stack</H2>
				<H5 style={{ margin: 0, alignSelf: 'flex-start' }}>Input: {originValue}</H5>
				{originType === 'Infix' && expectedType === 'Postfix' ? (
					<InfixPostfixTable record={postfixTable} />
				) : ''}
			</ContentWrapper>
			<ButtonHome to="/">
				<HomeIcon />
			</ButtonHome>
		</Container>
	);
}

export default Polish;
