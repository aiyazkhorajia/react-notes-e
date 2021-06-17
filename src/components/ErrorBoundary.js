import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: '',
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error) {
    // You can also log the error to an error reporting service
    this.setState({ hasError: true, error });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="form-body">
          <div className="row">
            <div className="form-holder">
              <div className="form-content">
                <div className="form-items">
                  <h3>Opps!</h3>
                  <p>Something went wrong</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

export default ErrorBoundary;
