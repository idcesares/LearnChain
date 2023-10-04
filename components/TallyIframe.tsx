import React from 'react';

interface TallyIframeProps {
  src: string;
}

const TallyIframe: React.FC<TallyIframeProps> = ({ src }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6" id="course">
        <iframe
        src={src}
        loading="lazy"
        width="100%"
        height="722"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Formulário de interesse no Curso de Introdução à Blockchain e Web3"
      ></iframe>
    </div>
  );
};

export default TallyIframe;