import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export class AIService {
  async generateSummary(leads: any[]) {
    try {
      const prompt = `
      Analiza los siguientes leads y genera un resumen con:
      - fuente principal
      - promedio de presupuesto
      - recomendación de negocio

      Leads:
      ${JSON.stringify(leads, null, 2)}
      `;

      const response = await openai.chat.completions.create({
        model: "gpt-4.1-mini",
        messages: [
          {
            role: "system",
            content: "Eres un analista de marketing experto."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7
      });

      return {
        resumen: response.choices[0].message.content
      };

    } catch (error) {
      console.error("❌ Error con OpenAI:", error);

      return {
        resumen: "Error generando resumen con IA"
      };
    }
  }
}