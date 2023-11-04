const Parallex = () => {
  const divStyle = {
    color: '#777',
    backgroundColor: 'white',
    textAlign: 'center',
    padding: '50px 80px',
    textAlign: 'justify',
  };

  const borderStyle = {
    background: 'transparent',
    fontSize: '25px',
    color: '#f7f7f7',
  };

  const contentStyle = {
    color: '#ddd',
    backgroundColor: '#282E34',
    textAlign: 'center',
    padding: '50px 80px',
    textAlign: 'justify',
  };

  return (
    <div>
      <div style={divStyle} className="bgimg-1">
        <div className="caption">
          <span className="border">SCROLL DOWN</span>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <div style={contentStyle}>
          <p>
            Scroll up and down to really get the feeling of how Parallax
            Scrolling works.
          </p>
        </div>
      </div>

      {/* <div style={divStyle}></div> */}

      <div className="bgimg-2">
        <div className="caption">
          <span className="border" style={borderStyle}>
            LESS HEIGHT
          </span>
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <div style={contentStyle}>
          <p>
            Scroll up and down to really get the feeling of how Parallax
            Scrolling works.
          </p>
        </div>
      </div>

      <div className="bgimg-3">
        <div className="caption">
          <span className="border" style={borderStyle}>
            SCROLL UP
          </span>
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <div style={contentStyle}>
          <p>
            Scroll up and down to really get the feeling of how Parallax
            Scrolling works.
          </p>
        </div>
      </div>

      <div className="bgimg-2">
        <div className="caption">
          <span className="border">COOL!</span>
        </div>
      </div>
    </div>
  );
};

export default Parallex;
