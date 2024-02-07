import '../Styles/statbtn.css';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const Stat = () => {
  return (
    <div className="flex justify-center">
      <div className="stats text-center w-[700px] mx-auto pb-7 pt-2 lg:stats-horizontal stats-vertical shadow">
        <div className="stat">
          <div className="stat-title">Downloads</div>
          <div className="stat-value">
            <CountUp
              start={1000}
              end={2347}
              duration={2.75}
              separator=" "
              decimals={0}
              decimal=","
              onEnd={() => console.log('Ended! 👏')}
              onStart={() => console.log('Started! 💨')}
            >
              {({ countUpRef, start }) => (
                <div>
                  <span ref={countUpRef} />
                  <span>+</span>
                  <button onClick={start}></button>
                </div>
              )}
            </CountUp>
          </div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Users</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>

        <div className="stat text-center mx-auto flex justify-center">
          <Link to='/rooms'> 
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
