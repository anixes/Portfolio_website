/**
 * Synthesised bass kick + hi-hat using Web Audio API.
 * Daft Punk-inspired — deep sub-bass punch with a crispy transient.
 * No external audio files needed.
 */

let ctx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let isEnabled = false;

function getCtx() {
  if (!ctx) {
    ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    masterGain = ctx.createGain();
    masterGain.gain.value = 0.35;
    masterGain.connect(ctx.destination);
  }
  if (ctx.state === 'suspended') ctx.resume();
  return { ctx, masterGain: masterGain! };
}

/** Play a deep bass kick — ~50Hz sine with fast pitch sweep and decay */
export function playKick() {
  if (!isEnabled) return;
  const { ctx: c, masterGain: master } = getCtx();
  const now = c.currentTime;

  // Sub-bass oscillator
  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(150, now);
  osc.frequency.exponentialRampToValueAtTime(45, now + 0.07);
  gain.gain.setValueAtTime(1, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
  osc.connect(gain);
  gain.connect(master);
  osc.start(now);
  osc.stop(now + 0.3);

  // Click transient for punch
  const click = c.createOscillator();
  const clickGain = c.createGain();
  click.type = 'square';
  click.frequency.setValueAtTime(800, now);
  click.frequency.exponentialRampToValueAtTime(100, now + 0.02);
  clickGain.gain.setValueAtTime(0.3, now);
  clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
  click.connect(clickGain);
  clickGain.connect(master);
  click.start(now);
  click.stop(now + 0.03);
}

/** Play a synthetic hi-hat — white noise burst */
export function playHat() {
  if (!isEnabled) return;
  const { ctx: c, masterGain: master } = getCtx();
  const now = c.currentTime;

  const bufferSize = c.sampleRate * 0.05;
  const buffer = c.createBuffer(1, bufferSize, c.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * 0.5;
  }

  const noise = c.createBufferSource();
  noise.buffer = buffer;

  // Bandpass to make it tinny
  const filter = c.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.value = 7000;

  const gain = c.createGain();
  gain.gain.setValueAtTime(0.15, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(master);
  noise.start(now);
  noise.stop(now + 0.06);
}

/** Toggle audio on/off — must be called from a user gesture */
export function toggleAudio(): boolean {
  if (!isEnabled) {
    getCtx(); // Initialize on user gesture
  }
  isEnabled = !isEnabled;
  return isEnabled;
}

export function isAudioEnabled() {
  return isEnabled;
}
