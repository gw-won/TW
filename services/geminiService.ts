import { GoogleGenAI } from "@google/genai";

export const generateCreativeAsset = async (prompt: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Refine prompt for the specific aesthetic of the site
  const enhancedPrompt = `
    Create a high-end, abstract marketing visual. 
    Style: Minimalist 3D render, futuristic, glossy textures, dark background with neon accents (orange, blue, white).
    Subject: ${prompt}.
    Resolution: High definition.
    Do not include text.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: enhancedPrompt }],
      },
      config: {
         imageConfig: {
             aspectRatio: "16:9", 
         }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    
    throw new Error("No image data returned from Gemini.");
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
};