import { useWindowWidth } from '@wojtekmaj/react-hooks';

const NoteImage = ({ imageList, index }) => {

  const width = useWindowWidth();

  return (
    <div className='note'>
      <img
        key={index}
        src={imageList[index]}
        alt={`image-${index}`}
        width={(width < 1350 ? width - 20 : 1000)} />
    </div>
  )
}

export default NoteImage