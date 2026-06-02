const sampleFrames = [
  { vehicle: 'OH-7', altitudeKm: 408.2, status: 'nominal' },
  { vehicle: 'OH-7', altitudeKm: 408.4, status: 'nominal' }
];

module.exports = {
  sampleFrames,
  normalize(frame) {
    return {
      vehicle: String(frame.vehicle),
      altitudeKm: Number(frame.altitudeKm),
      status: String(frame.status || 'unknown')
    };
  }
};
