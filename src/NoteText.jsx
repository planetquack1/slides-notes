import { useWindowWidth } from '@wojtekmaj/react-hooks';

const NoteText = ({ value, onChange }) => {

  const width = useWindowWidth();

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <textarea
      placeholder="type here..."
      value={value}
      onChange={handleChange}
      style={{
        width: width < 1350 ? width - 100 : 300
      }}
    >
    </textarea>
  )
}

export default NoteText