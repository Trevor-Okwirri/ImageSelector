import { useContext } from 'react';
import ImageContext from './../contexts/ImageContext';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    flex: 3,
  },
  infoContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '100%',
  },
  infoRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '8px', // Adds some space between rows for better readability
  },
  label: {
    fontWeight: 'bold',
    marginRight: '5px', // Adds space between the label and title
  },
};

const DisplayImageComponent = () => {
  const { imageData } = useContext(ImageContext);

  return (
    <div style={styles.container}>
      <img src={imageData.url} alt={imageData.metadata.title} style={styles.image} />
      <div style={styles.infoContainer}>
        <div style={styles.infoRow}>
          <p style={styles.label}>Title:</p>
          <p>{imageData.metadata.title}</p>
        </div>
        <div style={styles.infoRow}>
          <p style={styles.label}>Resolution:</p>
          <p>{imageData.metadata.resolution}</p>
        </div>
        <div style={styles.infoRow}>
          <p style={styles.label}>Date Taken:</p>
          <p>{imageData.metadata.date}</p>
        </div>
        <div style={styles.infoRow}>
          <p style={styles.label}>Location:</p>
          <p>{imageData.metadata.location}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayImageComponent;
