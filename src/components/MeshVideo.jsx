const MeshVideo = () => {
  return (
    <div className="flex justify-center pt-8">
      <video
        src="/Huddle_RD_2.0_4K.mov"
        autoPlay
        muted
        loop
        playsInline
        controls
        className="max-w-[800px] w-full"
      />
    </div>
  );
};

export default MeshVideo;
