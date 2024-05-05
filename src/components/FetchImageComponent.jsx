import ImageContext from "../contexts/ImageContext";
import  { useContext, useEffect } from 'react';

const FetchImageComponent = () => {
  const { setImageData } = useContext(ImageContext);

  useEffect(() => {
    const fetchData = async () => {
      const imageUrl = 'https://www.thestreet.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTkwODg5Mzk3NjExMzQxNDk0/1-apple-macbook-air-m2-review.webp';
      const metadata = { title: 'Sample Image', description: 'An example image from the internet', resolution: " 1920 x 1080", location: " Nairobi, Kenya" , date: " 25-January-2020"};
      setImageData({ url: imageUrl, metadata });
    };

    fetchData();
  }, [setImageData]);

  return null;
};

export default FetchImageComponent;
