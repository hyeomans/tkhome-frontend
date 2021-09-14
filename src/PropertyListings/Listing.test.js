import { render, screen, fireEvent } from '@testing-library/react';
import Listing from './Listing';

test('Figcaption is filled', () => {
  const inputData = {
    "property": {
      "area": 1043,
      "bathsFull": 5,
      "bathsHalf": 6,
      "bedrooms": 2
    },
    "mlsId": 1005192,
    "address": {
      "state": "Texas",
      "city": "Houston",
      "full": "74434 East Sweet Bottom Br #18393",
    },

    "listDate": "2011-05-23T18:50:30.184391Z",
    "photos": [
      "https://s3-us-west-2.amazonaws.com/cdn.simplyrets.com/properties/trial/home9.jpg",
      "https://s3-us-west-2.amazonaws.com/cdn.simplyrets.com/properties/trial/home-inside-9.jpg"
    ],
    "listPrice": 20714261
  }

  render(<Listing {...inputData} />);

  expect(screen.getByText('2 BR | 8 Bath | 1043 Sq Ft')).toBeInTheDocument()
  expect(screen.getByText('$20,714,261.00')).toBeInTheDocument()
  expect(screen.getByText('74434 East Sweet Bottom Br #18393, Houston, Texas')).toBeInTheDocument()
  expect(screen.getByText('Listed: 5/23/2011')).toBeInTheDocument()
})

test('heart is filled when clicked', () => {
  const inputData = {
    "property": {
      "area": 1043,
      "bathsFull": 5,
      "bathsHalf": 6,
      "bedrooms": 2
    },
    "mlsId": 1005192,
    "address": {
      "state": "Texas",
      "city": "Houston",
      "full": "74434 East Sweet Bottom Br #18393",
    },

    "listDate": "2011-05-23T18:50:30.184391Z",
    "photos": [
      "https://s3-us-west-2.amazonaws.com/cdn.simplyrets.com/properties/trial/home9.jpg",
      "https://s3-us-west-2.amazonaws.com/cdn.simplyrets.com/properties/trial/home-inside-9.jpg"
    ],
    "listPrice": 20714261
  }

  render(<Listing {...inputData} />);
  const heart = screen.getByAltText('favorite icon empty')
  expect(heart).toBeInTheDocument(heart)
  fireEvent.click(screen.getByAltText('favorite icon empty'))
  expect(screen.getByAltText('favorite icon filled')).toBeInTheDocument()
});
