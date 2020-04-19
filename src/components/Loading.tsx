import React from 'react';
import Lottie from 'react-lottie';
import animationData from 'assets/lottie/developer.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Loading: React.FC = () => (
  <section className="absolute flex inset-0 items-center justify-center">
    <div className="max-w-md">
      <Lottie options={defaultOptions} />
    </div>
  </section>
);

export default Loading;
