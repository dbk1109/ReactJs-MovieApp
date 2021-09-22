import React from "react";

class App extends React.Component {
  state = {
    isloading: true,
    movies: [
      {
        id: 1,
        name: "IMac",
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-og-202008?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1594849639000",
        rating: 4.3,
      },
      {
        id: 2,
        name: "MacBook",
        image:
          "https://cdn.cnn.com/cnnnext/dam/assets/201116214842-13-macbook-air-review-silicon-underscoredjpg.jpg",
        rating: 3,
      },
      {
        id: 3,
        name: "IPad",
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202104_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&.v=1617126635000",
        rating: 1.3,
      },
      {
        id: 4,
        name: "IPhone",
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&.v=1567022175704",
        rating: 4,
      },
      {
        id: 5,
        name: "Apple Watch",
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/40-alum-gold-sport-pinksand-6s-nc?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1599810781000",
        rating: 3.8,
      },
    ],
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isloading: false });
    }, 2000);
  }
  render() {
    const { isloading } = this.state;
    return <div>{this.state.isloading ? "Loading..." : "We are rady"}</div>;
  }
}

export default App;
