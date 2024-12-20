function Title({ title }) {
  return (
    <p
      id={title}
      className="font-inter font-semibold text-4xl border-b-2 border-black border-solid pb-1.5 lg:text-5xl lg:pb-4 lg:mb-5"
    >
      {title}
    </p>
  );
}

export default Title;
