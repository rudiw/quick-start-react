function Button({ upOnClick, children }) {
  return <button onClick={upOnClick}>{children}</button>;
}

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button upOnClick={onPlayMovie}>Play Movie</Button>
      <Button upOnClick={onUploadImage}>Upload Image</Button>
    </div>
  );
}

export default function ToolbarButton() {
  return (
    <Toolbar
      onPlayMovie={() => alert('Playing!')}
      onUploadImage={() => alert('Uploading!')}
    />
  );
}
