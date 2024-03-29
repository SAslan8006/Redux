const Weather = () => {
  return (
    <div className="py-5 px-10 bg-sky-900 border-4 rounded-2xl text-white">
      <div>Sirkeci, Istanbul, Turkey</div>

      <div className="flex items-center justify-between mb-8">
        <div>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="weather icon"
          />
          <div>Clear</div>
        </div>

        <div>
          <span className="mr-1">28.5</span>
          <span>
            <sup>o</sup>C
          </span>
        </div>

        <div>
          <div>Wind: 11 kmph</div>
          <div>Precip: 0 mm</div>
          <div>Pressure: 1012 mb</div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div>
          <div>TUE</div>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="weather icon"
          />
          <div>
            <span className="mr-1">22</span>
            <span>
              <sup>o</sup>C
            </span>
          </div>
        </div>

        <div>
          <div>WED</div>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="weather icon"
          />
          <div>
            <span className="mr-1">22</span>
            <span>
              <sup>o</sup>C
            </span>
          </div>
        </div>

        <div>
          <div>THU</div>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="weather icon"
          />
          <div>
            <span className="mr-1">22</span>
            <span>
              <sup>o</sup>C
            </span>
          </div>
        </div>

        <div>
          <div>FRI</div>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="weather icon"
          />
          <div>
            <span className="mr-1">22</span>
            <span>
              <sup>o</sup>C
            </span>
          </div>
        </div>

        <div>
          <div>SAT</div>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="weather icon"
          />
          <div>
            <span className="mr-1">22</span>
            <span>
              <sup>o</sup>C
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
