import React, {Component, ErrorInfo, ReactNode} from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo?: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.setState({errorInfo});
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>무언가 잘못됐어요...!</h1>
          <p>{this.state.error?.toString()}</p>
          <button onClick={() => this.setState({hasError: false})}>다시 시도하기</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
