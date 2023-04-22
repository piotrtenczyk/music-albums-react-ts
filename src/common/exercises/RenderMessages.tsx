interface RenderMessagesProps {
  messages: string[];
}

const RenderMessages: React.FC<RenderMessagesProps> = (props) => {
  const allMessages = props.messages.map((element) => {
    return <div>{element}</div>;
  });

  return <>{allMessages}</>;
};

export default RenderMessages;
