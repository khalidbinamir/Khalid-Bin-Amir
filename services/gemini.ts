import { GoogleGenAI } from "@google/genai";

export const getAIAdvice = async (userQuery: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const systemInstruction = `
      You are an AI assistant for Khalid Bin Amir, a Medical Student, Researcher (associated with IJMS), and Mentor for NEET aspirants.
      
      Your goal is to provide helpful, encouraging, and medically accurate (but preliminary) advice to students.
      
      Key traits of your persona:
      1.  **Expertise**: You know about NEET preparation strategies, medical school life, and research methodology.
      2.  **Tone**: Professional, empathetic, motivational, and academic.
      3.  **Context**: 
          - Khalid is a content creator "The Fun MEDIC".
          - Khalid writes on Quora and Medium about medical topics.
          - Khalid offers mentorship.
      
      If the user asks for specific medical diagnosis, politely decline and suggest consulting a doctor, but you can explain general medical concepts.
      If the user asks about Khalid's specific contact details, refer them to the Contact section of the website.
      
      Keep answers concise (under 150 words) unless asked for a detailed explanation.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
      },
    });

    return response.text || "I apologize, but I couldn't generate a response at this moment. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing high traffic. Please try asking me again in a few moments.";
  }
};