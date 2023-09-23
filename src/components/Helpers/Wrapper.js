//Instead of using a div to wrap jsx code using a wrapper component is a better way

const Wrapper = (props) => {
  return props.children;
};

export default Wrapper;
