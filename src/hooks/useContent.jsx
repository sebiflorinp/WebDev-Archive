import Code from "../components/Code.jsx";
import Paragraph from "../components/Paragraph.jsx";
import Note from "../components/Note.jsx";
import Subtitle from "../components/Subtitle.jsx";
import Title from "../components/Title.jsx";

function useContent() {
  function displayContent(content) {
    return (
      <div className="flex flex-col gap-3 pt-5 mx-5 pb-24">
        {content.map((contentItem) => {
          switch (contentItem.type) {
            case "Title":
              return <Title title={contentItem.title} />;
            case "Subtitle":
              return <Subtitle subtitle={contentItem.subtitle} />;
            case "Note":
              return <Note text={contentItem.text} />;
            case "Paragraph":
              return <Paragraph text={contentItem.text} />;
            case "Code":
              return (
                <Code language={contentItem.language} code={contentItem.code} />
              );
          }
        })}
      </div>
    );
  }
  return {
    displayContent,
  };
}

export default useContent;
