import React from 'react';
import { Flex, Box } from '@rebass/grid';
import us1 from '../../images/us1.png';
import us2 from '../../images/us2.png';
import us3 from '../../images/us3.png';
import us4 from '../../images/us4.png';
import us5 from '../../images/us5.png';
import './styles.css';

const OurStory = () => {
  const images = [us1, us2, us3, us4, us5];

  return (
    <div>
      <Flex>
        {images.map((image) => <Box p={[1]}><img src={image} /></Box>)}
      </Flex>
      <Flex justifyContent={'center'}>
        <Box>
          <p>
            Rach and Josh met at Penn State.
          </p>
        </Box>
      </Flex>
    </div>
  );
};

export default OurStory;
