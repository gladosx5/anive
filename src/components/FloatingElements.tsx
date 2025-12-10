function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-20 left-10 text-6xl animate-float">🎈</div>
      <div className="absolute top-40 right-20 text-5xl animate-float-delayed">🎉</div>
      <div className="absolute bottom-32 left-1/4 text-4xl animate-float-slow">✨</div>
      <div className="absolute top-1/3 right-10 text-6xl animate-float">🎊</div>
      <div className="absolute bottom-40 right-1/3 text-5xl animate-float-delayed">🎁</div>
      <div className="absolute top-1/2 left-16 text-4xl animate-float-slow">💝</div>
      <div className="absolute bottom-20 left-1/3 text-5xl animate-float">🌟</div>
      <div className="absolute top-60 right-1/4 text-4xl animate-float-delayed">🎂</div>
    </div>
  );
}

export default FloatingElements;
