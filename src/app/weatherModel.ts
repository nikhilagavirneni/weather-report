export class CurrentWeather {
  base!: string;
  visibility!: number;
  dt!: number;
  timezone!: number;
  id!: number;
  cod!: number;
  name!: string;
  coord!: Coord;
  weather!: Weather[];
  main!: Main;
  wind!: Wind;
  clouds!: Clouds;
  sys!: Sys;
  zipcode!: string;
}
export class ForecastWeather {
  cod!: number;
  message!: number;
  cnt!: number;
  city!: City;
  list!: WeatherList[];
}
class Coord {
  lon!: number;
  lat!: number;
}
class Weather {
  id!: number;
  main!: string;
  description!: string;
  icon!: string;
}
class Main {
  temp!: number;
  feels_like!: number;
  temp_min!: number;
  temp_max!: number;
  pressure!: number;
  humidity!: number;
}
class Wind {
  speed!: number;
  deg!: number;
}
class Clouds {
  all!: number;
}
class Sys {
  type!: number;
  id!: number;
  message!: number;
  country!: string;
  sunrise!: number;
  sunset!: number;
}
class City {
  id!: number;
  name!: string;
  coord!: Coord;
  country!: string;
  population!: number;
  timezone!: number;
}
class Temp {
  day!: number;
  min!: number;
  max!: number;
  night!: number;
  eve!: number;
  morn!: number;
}
class FeelsLike {
  day!: number;
  night!: number;
  eve!: number;
  morn!: number;
}
class WeatherList {
  dt!: number;
  sunrise!: number;
  sunset!: number;
  temp!: Temp;
  feels_like!: FeelsLike;
  pressure!: number;
  humidity!: number;
  weather!: Weather[];
  speed!: number;
  deg!: number;
  gust!: number;
  clouds!: number;
  pop!: number;
  dt_txt!: Date;
}
