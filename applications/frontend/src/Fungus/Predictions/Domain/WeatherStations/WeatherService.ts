export interface WeatherService {
  precipitation: ({ from, to, id }: { from: Date; to: Date; id: string }) => Promise<number>;
}
