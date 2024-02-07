import '../Styles/statbtn.css';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const Stat = () => {
  return (
    <div className="flex justify-center">
      <div className="stats text-center w-[1100px] mx-auto pb-7 lg:stats-horizontal stats-vertical shadow">
        <div className="stat">
          <div className="stat-title">Clients</div>
          <div className="stat-value">
            <CountUp
              start={1000}
              end={2347}
              duration={2.75}
              decimals={0}
              decimal=","
              onEnd={() => console.log('Ended! 👏')}
              onStart={() => console.log('Started! 💨')}
            >
              {({ countUpRef, start }) => (
                <div>
                  <span
                    ref={countUpRef}
                    className="font-script text-orange-400 font-bold mx-auto"
                  />
                  <span className="font-script">+</span>
                  <button onClick={start}></button>
                </div>
              )}
            </CountUp>
          </div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Tourists</div>
          <div className="stat-value">
            <CountUp
              start={1000}
              end={4000}
              duration={2.75}
              decimals={0}
              decimal=","
              onEnd={() => console.log('Ended! 👏')}
              onStart={() => console.log('Started! 💨')}
            >
              {({ countUpRef, start }) => (
                <div>
                  <span
                    ref={countUpRef}
                    className="font-script text-orange-400 font-bold mx-auto"
                  />
                  <span className="font-script font-bold mx-auto">+</span>
                  <button onClick={start}></button>
                </div>
              )}
            </CountUp>
          </div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">
            <CountUp
              start={800}
              end={1200}
              duration={2.75}
              decimals={0}
              decimal=","
              onEnd={() => console.log('Ended! 👏')}
              onStart={() => console.log('Started! 💨')}
            >
              {({ countUpRef, start }) => (
                <div>
                  <span
                    ref={countUpRef}
                    className="font-script text-orange-400 font-bold mx-auto"
                  />
                  <span className="font-script font-bold mx-auto">+</span>
                  <button onClick={start}></button>
                </div>
              )}
            </CountUp>
          </div>
          <div className="stat-desc">↗︎ 90 (14%)</div>
        </div>

        <div className="stat text-center mx-auto flex justify-center">
          <Link to="/rooms">
            <button className="bhutta">
              <span>See Rooms</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Stat;
