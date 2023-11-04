import { ClipLoader, PropagateLoader } from 'react-spinners';

interface LoadingSpinnerProps {
  size?: number;
}

export const LoadingSpinner = (props: LoadingSpinnerProps) => {
  const size = props.size ? props.size : 48;
  return <ClipLoader color="#0ea5e9" size={size} />;
};

export const LoadingPropagateSpinner = (props: LoadingSpinnerProps) => {
  const size = props.size ? props.size : 48;
  return <PropagateLoader color="#0ea5e9" size={size} />;
};
