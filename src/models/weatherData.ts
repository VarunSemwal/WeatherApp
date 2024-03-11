export class WeatherData {
    latitude: number;
    longitude: number;
    relativeHumidity: number;
    time: string[];
    temperatureMax: number[];
    temperatureMin: number[];
    apparentTemperatureMax: number[];
    apparentTemperatureMin: number[];
    precipitation: number;
    precipitationProbabilityMax: number[];

    constructor(data: any) {
        this.latitude = data.latitude;
        this.longitude = data.longitude;
        this.relativeHumidity = data.relativeHumidity;
        this.time = data.time;
        this.temperatureMax = data.temperatureMax;
        this.temperatureMin = data.temperatureMin;
        this.apparentTemperatureMax = data.apparentTemperatureMax;
        this.apparentTemperatureMin = data.apparentTemperatureMin;
        this.precipitation = data.precipitation;
        this.precipitationProbabilityMax = data.precipitationProbabilityMax;
    }
}
