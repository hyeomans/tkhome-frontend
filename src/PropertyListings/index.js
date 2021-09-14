import Listing from './Listing'
import useSimplyrets from './useSimplyrets';

function PropertyListings() {
  const { data, error } = useSimplyrets('/properties')
  return (
    <>
      {/* TODO: Navbar does not align with design */}
      <nav>
        Property Listings
      </nav>

      <section>
        {/* TODO: Use status of useReducer rather than boolean flags. */}
        {!data && !error && <div>Loading...</div>} 
        {error && <div>An error occurred, please reload or clear storage.</div>}
        {data &&
          <ul>
            {data.map(listing => (
              <li key={listing.mlsId}>
                <Listing {...listing} />
              </li>
            ))}
          </ul>
        }
      </section>
    </>
  );
}

export default PropertyListings;
