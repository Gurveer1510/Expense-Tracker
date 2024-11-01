import { useCallback } from 'react';

const useNeonColorGenerator = () => {
    return useCallback(() => {
        // Randomly select one color channel to be high (around 255) to ensure brightness
        const channels = [255, Math.floor(200 + Math.random() * 55), Math.floor(0 + Math.random() * 100)];
        
        // Shuffle the channel values to create variations in neon shades
        const [r, g, b] = channels.sort(() => Math.random() - 0.5);

        const hexR = r.toString(16).padStart(2, '0');
        const hexG = g.toString(16).padStart(2, '0');
        const hexB = b.toString(16).padStart(2, '0');

        return `#${hexR}${hexG}${hexB}`;
    }, []);
};

export default useNeonColorGenerator;
