import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample card data with images
const cardData = [
  { id: 1, title: 'Card 1', content: 'This is card 1 content.', imageUrl: 'https://www.bing.com/th?id=OADD2.7559555220891_19YTS9JHXQF12TJ1MK&pid=21.2&c=16&roil=0&roit=0&roir=1&roib=1&w=300&h=157&dynsize=1&qlt=90' },
  { id: 2, title: 'Card 2', content: 'This is card 2 content.', imageUrl: 'https://www.bing.com/th?id=OADD2.7559555220891_19YTS9JHXQF12TJ1MK&pid=21.2&c=16&roil=0&roit=0&roir=1&roib=1&w=300&h=157&dynsize=1&qlt=90' },
  { id: 3, title: 'Card 3', content: 'This is card 3 content.', imageUrl: 'https://www.bing.com/th?id=OADD2.7559555220891_19YTS9JHXQF12TJ1MK&pid=21.2&c=16&roil=0&roit=0&roir=1&roib=1&w=300&h=157&dynsize=1&qlt=90' },
  { id: 4, title: 'Card 4', content: 'This is card 4 content.', imageUrl: 'https://www.bing.com/th?id=OADD2.7559555220891_19YTS9JHXQF12TJ1MK&pid=21.2&c=16&roil=0&roit=0&roir=1&roib=1&w=300&h=157&dynsize=1&qlt=90' },
  { id: 5, title: 'Card 1', content: 'This is card 1 content.', imageUrl: 'https://www.bing.com/th?id=OADD2.7559555220891_19YTS9JHXQF12TJ1MK&pid=21.2&c=16&roil=0&roit=0&roir=1&roib=1&w=300&h=157&dynsize=1&qlt=90' },
  { id: 6, title: 'Card 2', content: 'This is card 2 content.', imageUrl: 'https://example.com/image2.jpg' },
  { id: 7, title: 'Card 3', content: 'This is card 3 content.', imageUrl: 'https://www.bing.com/th?id=OADD2.7559555220891_19YTS9JHXQF12TJ1MK&pid=21.2&c=16&roil=0&roit=0&roir=1&roib=1&w=300&h=157&dynsize=1&qlt=90' },
  { id: 8, title: 'Card 4', content: 'This is card 4 content.', imageUrl: 'https://www.bing.com/th?id=OADD2.7559555220891_19YTS9JHXQF12TJ1MK&pid=21.2&c=16&roil=0&roit=0&roir=1&roib=1&w=300&h=157&dynsize=1&qlt=90' },
  { id: 9, title: 'Card 1', content: 'This is card 1 content.', imageUrl: 'https://www.bing.com/th?id=OADD2.7559555220891_19YTS9JHXQF12TJ1MK&pid=21.2&c=16&roil=0&roit=0&roir=1&roib=1&w=300&h=157&dynsize=1&qlt=90' },
  { id: 10, title: 'Card 2', content: 'This is card 2 content.', imageUrl: 'https://www.bing.com/th?id=OADD2.7559555220891_19YTS9JHXQF12TJ1MK&pid=21.2&c=16&roil=0&roit=0&roir=1&roib=1&w=300&h=157&dynsize=1&qlt=90' },
  { id: 11, title: 'Card 3', content: 'This is card 3 content.', imageUrl: 'https://www.bing.com/th?id=OADD2.7559555220891_19YTS9JHXQF12TJ1MK&pid=21.2&c=16&roil=0&roit=0&roir=1&roib=1&w=300&h=157&dynsize=1&qlt=90' },
  { id: 12, title: 'Card 4', content: 'This is card 4 content.', imageUrl: 'https://example.com/image4.jpg' },
  // Add more cards as needed
];

const CardCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Display 4 cards at once
    slidesToScroll: 4, // Scroll 4 cards at a time
  };

  return (
    <Slider {...settings}>
      {cardData.map((card) => (
        <div key={card.id} className="card">
          <img src={card.imageUrl} alt={card.title} />
          <h2>{card.title}</h2>
          <p>{card.content}</p>
        </div>
      ))}
    </Slider>
  );
};

export default CardCarousel;
