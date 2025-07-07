
import React from 'react';


function ExpandableSection({ title, children, isOpen, onToggle }) {
  // Generate unique IDs for accessibility
  const contentId = `more-content-${title.replace(/\s+/g, '-').toLowerCase()}`; 

  return (
    <div style={{ marginBottom: '10px' }}> 
      <p style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 0',
        borderBottom: '1px solid #eee', // Add a subtle separator
        cursor: 'pointer' 
      }}
      onClick={onToggle} 
      >
        <span style={{ fontWeight: 'bold', flexGrow: 1 }}>{title}</span>
        <span
          style={{
            color: 'blue',
            marginLeft: '10px',
            minWidth: '20px',
            textAlign: 'center'
          }}
          aria-expanded={isOpen}
          aria-controls={contentId}
        >
          {isOpen ? '▲' : '▼'}
        </span>
      </p>
      {isOpen && (
        <div
          id={contentId}
          style={{
            borderLeft: '2px solid #eee',
            padding: '10px 15px', // Adjusted padding
            marginBottom: '15px',
            lineHeight: '1.6',
            backgroundColor: '#f9f9f9', 
            borderRadius: '0 0 5px 5px' 
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default ExpandableSection;