import Input from "../components/layout/form/Input";

const NewArticle = (props) => {
  return (
    <form>
      <Input element="input" type="text" label="Title" />
    </form>
  );
};

export default NewArticle;
