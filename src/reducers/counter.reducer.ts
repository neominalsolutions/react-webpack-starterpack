// güncel state
// action state değiştirmek için gönderilen payload yani veri ve action içindeki type yapılması gereken eylem.

export function CounterReducer(state: any, action: any) {
	console.log('state', state);
	console.log('action', action);

	if (action.type === 'incremented_age') {
		return {
			age: state.age + 1,
			employeed: true,
		};
	} else if (action.type === 'unemployeed') {
		return {
			age: action.payload,
			employeed: false,
		};
	}

	throw Error('Unknown action.');
}
