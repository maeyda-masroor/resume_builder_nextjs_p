// pages/TwoDivsGrid.tsx

export default function CreateResume(){
    return (
      <div style={gridStyles.container}>
        <div style={gridStyles.box}>Div 1</div>
        <div style={gridStyles.box}>Div 2</div>
      </div>
    );
  };
  
  // Styles for the grid layout
  const gridStyles = {
    container: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr', // Two equal columns
      gap: '20px', // Space between the columns
      padding: '20px',
    },
    box: {
      padding: '20px',
      backgroundColor: '#e0e0e0',
      textAlign: 'center',
      borderRadius: '5px',
    },
  };
  
  