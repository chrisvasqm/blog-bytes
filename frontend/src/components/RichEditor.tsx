import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface Props {
  value: string,
  onChange: (value: string) => void;
}

const RichEditor = ({ value, onChange }: Props) => {
  return (
    <ReactQuill theme="snow" value={value} onChange={newValue => onChange(newValue)} />
  )
}

export default RichEditor;