import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  top: env(safe-area-inset-top);
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background: black;
`;

class Page extends React.Component {
  static defaultProps = {
    className: '',
  };

  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }

  componentDidMount() {
    this._resize();
    window.addEventListener('resize', this._resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (width / 9 * 16 > height) {
      this.wrapperRef.current.style.width = `${Math.floor(height / 16 * 9)}px`;
      this.wrapperRef.current.style.height = `${height}px`;
    } else {
      this.wrapperRef.current.style.width = `${width}px`;
      this.wrapperRef.current.style.height = `${Math.floor(width / 9 * 16)}px`;
    }
  };

  render() {
    return (
      <Wrapper
        className={this.props.className}
        ref={this.wrapperRef}
      >
        {this.props.children}
      </Wrapper>
    );
  }
}

export default Page;
