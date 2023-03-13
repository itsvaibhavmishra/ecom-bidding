import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function AuctionItem({ name, image, endTime, bidPrice }) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const duration = (new Date(endTime) - new Date()) / 1000;
      const hours = Math.floor(duration / 3600);
      const minutes = Math.floor((duration % 3600) / 60);
      const seconds = Math.floor(duration % 60);
      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [endTime]);

  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <Helmet>
        <title>Auction House-EcomBidding</title>
      </Helmet>
      <img
        src={image}
        alt="ItemImage"
        className="w-full h-48 object-contain hover:scale-105 duration-500"
      />
      <div className="px-4 py-2">
        <h2 className="text-lg font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600">Current Bid: ₹{bidPrice}</p>
        <p className="text-gray-600">
          Time Left: <span className="font-bold">{timeLeft}</span>
        </p>
        <Link to="/auctiondetails">
          <button className="w-full py-2 px-4 bg-gray-300 text-gray-600 duration-200 rounded-md mt-4 hover:bg-gray-400">
            Bid Now
          </button>
        </Link>
      </div>
    </div>
  );
}

function AuctionPage() {
  const products = [
    {
      name: 'Adidas Shoes Pink Unisex',
      image:
        'https://media.istockphoto.com/id/1436061606/photo/flying-colorful-womens-sneaker-isolated-on-white-background-fashionable-stylish-sports-shoe.jpg?b=1&s=170667a&w=0&k=20&c=GXD8Ci32Wa8c8Zc49domJFzqpCTaHgxe96_qfM7ml8w=',
      endTime: new Date(Date.now() + 12 * 60 * 60 * 1000).toISOString(),
      bidPrice: 899,
      description:
        'Adidas Unisex-Adult Fire Runner Profoam, Chalk Pink-White, Running Shoe - 4UK (37718206)',
    },
    {
      name: 'boAt Xtend/Xtend RTL Smartwatch with Alexa',
      image:
        'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61gscZYmaoL._SX522_.jpg',
      endTime: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
      bidPrice: 1899,
      description: 'Description',
    },
    {
      name: 'Mens Kurta',
      image:
        'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51EGfKqjMoL._UY741_.jpg',
      endTime: new Date(Date.now() + 5 * 60 * 60 * 1000).toISOString(),
      bidPrice: 699,
      description: 'Description',
    },
    {
      name: 'Steelbird SA-5 Monster',
      image:
        'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61gAaN-m6aL._SX679_.jpg',
      endTime: new Date(Date.now() + 6 * 60 * 60 * 1000).toISOString(),
      bidPrice: 4019,
      description: 'Description',
    },
    {
      name: 'Womens Hoodie',
      image:
        'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61PiFceNJLL._UY879_.jpg',
      endTime: new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString(),
      bidPrice: 599,
      description: 'Description',
    },
    {
      name: 'HP All-in-One 12th Gen Intel Core i3',
      image:
        'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ogPth2lzL._SL1200_.jpg',
      endTime: new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString(),
      bidPrice: 50219,
      description: 'Description',
    },
  ];

  return (
    <div className="bg-gray-100">
      <header className="bg-cyan-500 py-4 shadow-sm">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-white text-center">
            <i class="fas fa-hourglass-half text-2xl mr-2"></i>
            Live Auction
          </h1>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-10">
          {products.map((product, index) => (
            <AuctionItem key={index} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default AuctionPage;
