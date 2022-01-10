import axios from 'axios';

import { WeatherService } from '../../Domain/WeatherStations/WeatherService';
import { WeatherServiceDoesNotWork } from '../../Domain/WeatherStations/WeatherServiceDoesNotWork';
import { ResponseWithoutData } from '../../Domain/WeatherStations/ResponseWithoutData';

type ResponseDataWasGenerated = { estado: number; datos?: string };
type ResponseWeatherValues = Array<{ prec?: string }>;

const BASE_URL = 'https://opendata.aemet.es/opendata/api';
const API_KEY = process.env.API_KEY_AEMET;

export class AEMETWeatherService implements WeatherService {
  async precipitation(params: { from: Date; to: Date; id: string }): Promise<number> {
    // To-Do test eveything
    const weatherValues = await this.getWeatherValues(params);

    return this.sumPrecipitation(weatherValues);
  }

  private sumPrecipitation(weatherValues: ResponseWeatherValues): number {
    return weatherValues.reduce(
      (total, dailyWeatherData) =>
        total + (dailyWeatherData.prec ? Number(dailyWeatherData.prec.replace(',', '.')) : 0),
      0,
    );
  }

  private async getWeatherValues(params: { from: Date; to: Date; id: string }): Promise<ResponseWeatherValues> {
    try {
      const dataUrl = await this.generateWeatherValuesUrl(params);

      const responseWeatherValues = await axios.get<ResponseWeatherValues>(dataUrl);

      return responseWeatherValues.data;
    } catch (error) {
      if (error instanceof ResponseWithoutData) {
        throw error;
      } else {
        throw new WeatherServiceDoesNotWork();
      }
    }
  }

  private async generateWeatherValuesUrl({ from, to, id }: { from: Date; to: Date; id: string }): Promise<string> {
    const formattedFrom = from.UTCFormat({ resetTime: true });
    const formattedTo = to.UTCFormat();
    const path = `${BASE_URL}/valores/climatologicos/diarios/datos/fechaini/${formattedFrom}/fechafin/${formattedTo}/estacion/${id}?api_key=${API_KEY}`;

    // To-do Implement a log component
    console.log(`Weather Station call with path: ${path}`);
    const responseDataGenerated = await axios.get<ResponseDataWasGenerated>(path);

    if (responseDataGenerated.data.estado != 200 || !responseDataGenerated.data.datos) {
      throw new ResponseWithoutData();
    }

    return responseDataGenerated.data.datos;
  }
}
