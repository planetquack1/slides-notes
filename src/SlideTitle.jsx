import { useWindowWidth } from '@wojtekmaj/react-hooks';
import { Interweave } from 'interweave';

const SlideTitle = ({ metadata, index }) => {

  const width = useWindowWidth();

  return (
    <div className="slide-title" style={{
      width: width - 20,
      wordWrap: 'break-word', // Ensure long words are broken to fit within the width
      overflow: 'hidden', // Hide any overflow text
      textOverflow: 'ellipsis', // Optionally, add ellipsis for overflowed text
      whiteSpace: 'normal', // Ensure text wraps normally
    }}>
      <Interweave content={metadata['slide_headers'][index + 1]} />
    </div>
  )
}

export default SlideTitle