import { GoogleGenAI } from "@google/genai";
import { SERVICES, PROJECTS, COMPANY_NAME, TAGLINE, CONTACT_EMAIL, CONTACT_ADDRESS, CONTACT_PHONE } from "../constants";

// Initialize Gemini Client
// Assumption: process.env.API_KEY is available as per requirements
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the virtual assistant for ${COMPANY_NAME}, a premier IT solutions company based in Sri Lanka.
Tagline: ${TAGLINE}.
Location: ${CONTACT_ADDRESS}

Your goal is to help visitors understand our services and expertise.
Be professional, concise, and helpful. You can mention our team is based in Colombo.

Here is context about our company:
Services: ${SERVICES.map(s => s.title + ": " + s.description).join('; ')}
Projects: ${PROJECTS.map(p => p.title + " (" + p.industry + ")").join('; ')}

If asked about pricing, ask them to contact us for a custom quote in LKR or USD.
If asked for contact info, provide:
Email: ${CONTACT_EMAIL}
Phone: ${CONTACT_PHONE}
Address: ${CONTACT_ADDRESS}

Do not make up facts about projects not listed here.
`;

export const chatWithGemini = async (userMessage: string, history: {role: 'user' | 'model', text: string}[]) => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Convert history to format expected by chat (if using chat session) 
    // or just append to context for a single generation call.
    // For simplicity and state management in this demo, we will use generateContent with system instruction.
    
    // Construct the prompt with history context
    const conversationContext = history.map(h => `${h.role === 'user' ? 'User' : 'Assistant'}: ${h.text}`).join('\n');
    const finalPrompt = `${conversationContext}\nUser: ${userMessage}\nAssistant:`;

    const response = await ai.models.generateContent({
      model: model,
      contents: finalPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I apologize, I'm having trouble connecting to the server right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing high traffic. Please try again later.";
  }
};