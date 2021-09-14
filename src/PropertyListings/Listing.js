import usePersistFavorites from './usePersistFavorites'
import heartFill from '../assets/heart-fill.svg';
import heartStroke from '../assets/heart-stroke.svg';

const Listing = (props) => {
  const [storedValue, setValue] = usePersistFavorites(props.mlsId, false)
  const onHeartClick = () => setValue(!storedValue)
  const heartFilled = storedValue ? heartFill : heartStroke

  const imgUrl = props.photos[0] //TODO: Have a fallback stock photo
  const baths = props.property.bathsFull + (props.property.bathsHalf / 2)
  const description = `${props.property.bedrooms} BR | ${baths} Bath | ${props.property.area} Sq Ft`
  const address = `${props.address.full}, ${props.address.city}, ${props.address.state}`
  const listDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' }).format(new Date(props.listDate))
  const listingPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.listPrice)

  return (
    <figure>
      <img className="heart" src={heartFilled} alt={`favorite icon ${storedValue ? 'filled' : 'empty'}`} onClick={onHeartClick} />
      <img className="listing-image" src={imgUrl} alt="House description" />

      <figcaption>
        <div className="listing-description">{description}</div>
        <div className="listing-price">{listingPrice}</div>
        <div className="listing-address">{address}</div>
        <div className="listing-date">Listed: {listDate}</div>
      </figcaption>
    </figure>
  )
}

export default Listing