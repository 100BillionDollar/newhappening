// components/FaqAccordion.jsx
import React from 'react';

const FaqAccordion = () => {
  const faqData = [
    {
      id: 'faq1',
      question: 'Sed ut perspiciatis',
      answer: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.'
    },
    {
      id: 'faq2',
      question: 'Sed ut perspiciatis',
      answer: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.'
    },
    {
      id: 'faq3',
      question: 'Sed ut perspiciatis',
      answer: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.'
    },
    {
      id: 'faq4',
      question: 'Sed ut perspiciatis',
      answer: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.'
    }
  ];

  // Custom CSS for burgundy color scheme
  const customStyles = {
    chevron: {
      position: 'absolute',
      right: '0',
      transition: 'transform 0.2s ease-in-out'
    }
  };

  return (
    <div className="container my-5 mt-0">
      <h2 className="page_heading">FAQ's</h2>
      
      <div className="accordion" id="faqAccordion">
        {faqData.map((faq, index) => (
          <div className="accordion-item border-0" key={faq.id}>
            <h2 className="accordion-header">
              <button 
                className={`accordion-button ${index > 0 ? 'collapsed' : ''}`}
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target={`#${faq.id}`}
                aria-expanded={index === 0 ? "true" : "false"} 
                aria-controls={faq.id}
                style={customStyles.accordionButton}
              >
                {faq.question}
                <i className="bi bi-chevron-down" style={customStyles.chevron}></i>
              </button>
            </h2>
            <div 
              id={faq.id} 
              className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body pt-0 pb-4">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;