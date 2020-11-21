export interface InfixPostfix {
	symbol: string;
	p: string[];
	operator: string[];
}

export class PolishCalculator {
	public static infixToPrefix(infix: string) {
		const reversedInfix: string[] = [];
		const prefix: string[] = [];

		for (let i = 0; i < infix.length; i++) {
			let symbol = infix.charAt(i);
			if (symbol === '(') {
				symbol = ')';
			} else if (symbol === ')') {
				symbol = '(';
			}
			reversedInfix.unshift(symbol.toString());
		}
		const postfix: string[] = PolishCalculator.infixToPosfix(reversedInfix.join(''));
		postfix.forEach((p) => {
			prefix.unshift(p);
		});
		return prefix;
	}

	public static infixToPosfix(infix: string, callback?: (record: InfixPostfix[]) => void) {
		const p: string[] = [];
		const operator: string[] = [];
		const record: InfixPostfix[] = [];
		infix += ')';
		operator.push('(');

		infix.split('').forEach((i) => {
			if (i.match(/[+*^/-]/)) {
				const peek = operator[operator.length - 1];
				if (PolishCalculator.getPriotity(peek) >= PolishCalculator.getPriotity(i)) {
					p.push(operator.pop() as string);
				}
				operator.push(i);
			} else if (i === '(') {
				operator.push(i);
			} else if (i === ')') {
				while (true) {
					if (operator[operator.length - 1] === '(') {
						operator.pop();
						break;
					}
					p.push(operator.pop() as string);
				}
			} else {
				p.push(i);
			}
			if (callback) {
				record.push({
					p: [...p],
					operator: [...operator],
					symbol: i,
				});
			}
		});
		if (callback) callback(record);
		return p;
	}

	public static postfixToInfix(postfix: string) {
		const stack: string[] = [];
		let value: string;
		postfix.split('').forEach((s) => {
			if (PolishCalculator.getPriotity(s) === -1) {
				stack.push(s);
			} else {
				let var1 = stack.pop();
				let var2 = stack.pop();
				let res = '(' + var2 + s + var1 + ')';
				stack.push(res);
			}
		});
		value = stack.pop() as string;
		return value;
	}

	public static prefixToInfix(prefix: string) {
		const stack: string[] = [];
		const splittedPrefix: string[] = prefix.split('');
		let value: string;
		for (let i = splittedPrefix.length - 1; i >= 0; i--) {
			if (PolishCalculator.getPriotity(splittedPrefix[i]) !== -1) {
				let var1 = stack.pop();
				let var2 = stack.pop();
				let res = '(' + var1 + splittedPrefix[i] + var2 + ')';
				stack.push(res);
			} else {
				stack.push(splittedPrefix[i]);
			}
		}
		value = stack.pop() as string;
		return value;
	}

	public static prefixToPostfix(prefix: string) {
		const infix = PolishCalculator.prefixToInfix(prefix);
		return PolishCalculator.infixToPosfix(infix);
	}

	public static postfixToPrefix(postfix: string) {
		const infix = PolishCalculator.postfixToInfix(postfix);
		return PolishCalculator.infixToPrefix(infix);
	}

	private static getPriotity(symbol: string) {
		switch (symbol) {
			case '-':
			case '+':
				return 1;
			case '/':
			case '*':
				return 2;
			case '^':
				return 3;
			default:
				return -1;
		}
	}
}
