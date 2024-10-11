function Note({ text }) {
  return (
    <div className="border-solid border-black border-4 rounded-lg p-2">
      <h1 className="font-inter font-semibold text-xl">NOTE</h1>
      <p className="font-inter text-md">{text}</p>
    </div>
  );
}

export default Note;
