interface WrapperProps {
  children?: React.ReactNode;
  // children?: React.ReactElement;
  // children?: JSX.Element;
}
function Wrapper({ children }: WrapperProps) {
  return (
    <div style={{ padding: '10px', backgroundColor: "yellow" }}>
      {children}
    </div>
  );
}
export default Wrapper;
