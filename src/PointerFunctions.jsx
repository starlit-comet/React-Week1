function PointerDemo() {
  const handlePointerDown = (event) => {
    alert(`Pointer type: ${event.pointerType}`);
  };

  return (
    <div onPointerDown={handlePointerDown} style={{width: '100px', height: '100px', background: 'lightblue'}}>
      Click Me
    </div>
  );
}

export default PointerDemo;