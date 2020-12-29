import axios from 'axios';

import { WeatherService } from '../../Domain/WeatherStations/WeatherService';

const BASE_URL = 'https://opendata.aemet.es/opendata/api';
const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZXJnaW9zYW5jaGV6bWFyY29zQGdtYWlsLmNvbSIsImp0aSI6ImY0MGQyMDcwLTIwMTktNGJkMS1iM2JkLThmZjFjNTNlY2E0NSIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNjA3MzYyOTA4LCJ1c2VySWQiOiJmNDBkMjA3MC0yMDE5LTRiZDEtYjNiZC04ZmYxYzUzZWNhNDUiLCJyb2xlIjoiIn0.uW1-AkXV6zXVsAsR2nVQYWLaV9gnzrCU2TklU4-MeDE';

type ResponseDataWasGenerated = { estado: number; datos?: string };
type ResponseWeatherValues = Array<{ prec?: string }>;
export class AEMETWeatherService implements WeatherService {
  async precipitation({ from, to, id }: { from: Date; to: Date; id: string }): Promise<number> {
    // To-Do test eveything
    // To-Do add secrets support
    // To-Do control errors
    const path = `${BASE_URL}/valores/climatologicos/diarios/datos/fechaini/${this.formatUTCDate(
      from,
      true,
    )}/fechafin/${this.formatUTCDate(to, false)}/estacion/${id}?api_key=${API_KEY}`;
    console.log('----------------->PATH: ', path);
    try {
      const responseDataGenerated = await axios.get<ResponseDataWasGenerated>(path);
      if (responseDataGenerated.data.estado != 200 || !responseDataGenerated.data.datos) {
        // To-Do throw domain exceptions here
        throw new Error('No data');
      }
      console.log('----------------->responseDataGenerated.data.datos: ', responseDataGenerated.data.datos);
      const responseWeatherValues = await axios.get<ResponseWeatherValues>(responseDataGenerated.data.datos);
      console.log('----------------->responseWeatherValues: ', responseWeatherValues);

      const result = responseWeatherValues.data.reduce(
        (total, dailyWeatherData) =>
          total + (dailyWeatherData.prec ? Number(dailyWeatherData.prec.replace(',', '.')) : 0),
        0,
      );
      console.log('----------------->result: ', result);
      return result;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }
  // To-Do move to date object
  private formatUTCDate(date: Date, startDay: boolean): string {
    // 2020-08-01T00:00:00UTC OR 2020-08-01T23:59:49UTC
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}T${
      startDay ? '00:00:00' : '23:59:59'
    }UTC`;
  }
}
