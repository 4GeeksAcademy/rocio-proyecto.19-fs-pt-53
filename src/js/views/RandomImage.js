import React, { useState, useEffect } from 'react';

const UserImage = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('https://randomuser.me/api/?inc=picture')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const randomFaceUrl = data.results[0].picture.large;
        setImageUrl(randomFaceUrl);
      })
      .catch(error => {
        console.error('Error fetching random face:', error);
      });
  }, []);

  return (
    <div className='ms-4'>
      {imageUrl && <img src={imageUrl} alt="Random user face" className='image rounded-circle' />}
    </div>
  );
};

export default UserImage;