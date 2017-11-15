namespace _04.Weather
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text.RegularExpressions;

    public class Weather
    {
        public static void Main()
        {
            var input = Console.ReadLine();

            var forecastList = new List<Forecast>();
            var regex = new Regex(@"([A-Z]{2})(\d+\.\d+)([A-Za-z]+)\|");

            while (input != "end")
            {
                var match = regex.Match(input);

                if (match.Success)
                {
                    var nameOfCity = match.Groups[1].ToString();
                    var averageTemperature = double.Parse(match.Groups[2].ToString());
                    var typeOfWeather = match.Groups[3].ToString();

                    var tempOrWeatherExists = forecastList
                        .FindIndex(t => t.NameOfCity == nameOfCity);

                    if (tempOrWeatherExists >= 0)
                    {
                        forecastList[tempOrWeatherExists].AverageTemperature = averageTemperature;
                        forecastList[tempOrWeatherExists].NameOfCity = nameOfCity;
                        forecastList[tempOrWeatherExists].TypeOfWeather = typeOfWeather;
                    }

                    else
                    {
                        var forecastClassInfo = new Forecast(nameOfCity, averageTemperature, typeOfWeather);
                        forecastList.Add(forecastClassInfo);
                    }
                }

                input = Console.ReadLine();
            }

            PrintForecasts(forecastList);
        }

        public static void PrintForecasts(List<Forecast> forecastList)
        {
            var sortedForecasts = forecastList
                .OrderBy(t => t.AverageTemperature);

            foreach (var forecast in sortedForecasts)
            {
                Console.WriteLine
                    ($"{forecast.NameOfCity} => {forecast.AverageTemperature:f2} => {forecast.TypeOfWeather}");
            }
        }
    }
}