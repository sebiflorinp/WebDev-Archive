function Note({ text }) {
  return (
    <div className="border-solid border-black border-4 rounded-lg p-2 my-4">
      <h1 className="font-inter font-semibold text-xl lg:text-2xl">NOTE</h1>
      <p className="font-inter text-md lg:text-xl whitespace-pre-wrap">
        {text}
      </p>
    </div>
  );
}

export default Note;
