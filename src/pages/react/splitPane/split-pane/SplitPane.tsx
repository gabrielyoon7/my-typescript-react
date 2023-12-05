import ErrorBoundary from "./ErrorBoundary.tsx";
import SplitPaneRenderer from "./SplitPaneRenderer.tsx";

function SplitPane() {
  return (
    <ErrorBoundary>
      <SplitPaneRenderer/>
    </ErrorBoundary>
  );
}

export default SplitPane;
