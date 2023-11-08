const Map = () => {
  return (
    <div>
      <div className="items-center">
        <div className="mx-auto flex items-center justify-center">
          <iframe
            width="300"
            height="300"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=ok%20Carlifornia%2092028,%20USA+(Luciana)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">Find Population on Map</a>
          </iframe>
        </div>
        <div className="items-center">
          <h1 className="font-script font-bold text-4xl">Follow Our Route</h1>
          <img
            className="w-[200px]"
            src="https://i.ibb.co/B4qrcYv/22a3c05b53d5a2187a0fb372bff9cd1a.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Map;
