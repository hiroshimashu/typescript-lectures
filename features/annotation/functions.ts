const add = (a: number, b: number) => {
	return a + b;
};

const logger = (message: string): void => {
	if (!message) {
		throw new Error(message);
	}
};

const forecast = {
	date: new Date(),
	weather: 'sunny'
};

const logweather = ({ date, weather }: { date: Date; weather: string }): void => {
	console.log(date);
	console.log(weather);
};

const profile = {
	age: 15,
	coords: {
		lng: 10,
		log: 15
	}
};

const { age }: { age: number } = profile;
const { coords: { lng, log } }: { coords: { lng: number; log: number } } = profile;
