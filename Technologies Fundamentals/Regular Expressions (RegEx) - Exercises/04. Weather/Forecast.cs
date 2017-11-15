namespace _04.Weather
{
   public class Forecast
    {
        public Forecast(string nameOfCity, double averageTemperature, string typeOfWeather)
        {
            this.NameOfCity = nameOfCity;
            this.AverageTemperature = averageTemperature;
            this.TypeOfWeather = typeOfWeather;
        }

        public string NameOfCity { get; set; }
        public double AverageTemperature { get; set; }
        public string TypeOfWeather { get; set; }

    }
}