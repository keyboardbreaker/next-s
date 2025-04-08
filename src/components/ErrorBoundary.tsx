import React from "react";

interface ErrorBoundaryProps {
    fallback: React.ReactNode;
    children: React.ReactNode;
}
  
interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState = { hasError: false };

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true };
    };

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log(error, errorInfo);
    }

    render() {
        if(this.state.hasError) {
            return <h4>{this.props.fallback}</h4>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;