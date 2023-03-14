import Button from "./Button";

const ButtonControl = ({ reqType, setReqType }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="buttons">
        <Button
          buttonText="comments"
          reqType={reqType}
          setReqType={setReqType}
        />
        <Button buttonText="posts" reqType={reqType} setReqType={setReqType} />
        <Button buttonText="users" reqType={reqType} setReqType={setReqType} />
      </div>
    </form>
  );
};

export default ButtonControl;
