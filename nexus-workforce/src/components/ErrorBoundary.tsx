import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#f9f9fa] flex items-center justify-center p-8">
          <div className="max-w-lg w-full bg-white rounded-xl shadow-sm border border-[#e4e4e7] p-8 text-center">
            <span className="material-symbols-outlined text-[#e11d48] text-5xl mb-4 block">error</span>
            <h1 className="font-headline-lg text-xl font-bold text-black mb-2">Something went wrong</h1>
            <p className="text-sm text-[#71717a] mb-6">
              An unexpected error occurred. Please try refreshing the page.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.href = '/dashboard';
              }}
              className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}