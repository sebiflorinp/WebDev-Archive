function Subtitle({ subtitle }) {
  return (
    <p
      id={subtitle}
      className="font-inter text-3xl pt-4 font-semibold lg:text-4xl"
    >
      {subtitle}
    </p>
  );
}

export default Subtitle;
