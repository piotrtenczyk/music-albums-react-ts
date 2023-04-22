interface RenderMessageProps {
  message: string;
}

function RenderMessage(props: RenderMessageProps) {
  return <div>{props.message}</div>;
}

// function RenderMessage(message: string) {
//     return <div>{message}</div>;
//   }

export default RenderMessage;

// Wykorzsytamy: <RenderHello message="hello/>
